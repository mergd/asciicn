"use client";

import { useState, ReactNode, useRef, useEffect } from "react";

interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
}

interface AccordionProps {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
  variant?: "single" | "double";
}

export function Accordion({
  items,
  type = "single",
  defaultValue,
  className = "",
  variant = "single",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    if (defaultValue) {
      return new Set(
        Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      );
    }
    return new Set();
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (type === "single") {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  const indicators = {
    single: { closed: "►", open: "▼" },
    double: { closed: "»", open: "«" },
  };

  const ind = indicators[variant];

  return (
    <div className={`space-y-1 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const isDisabled = item.disabled ?? false;

        return (
          <AccordionItemComponent
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isOpen={isOpen}
            isDisabled={isDisabled}
            indicator={ind}
            onToggle={toggleItem}
          />
        );
      })}
    </div>
  );
}

interface AccordionItemComponentProps {
  id: string;
  title: string;
  content: ReactNode;
  isOpen: boolean;
  isDisabled: boolean;
  indicator: { open: string; closed: string };
  onToggle: (id: string) => void;
}

function AccordionItemComponent({
  id,
  title,
  content,
  isOpen,
  isDisabled,
  indicator,
  onToggle,
}: AccordionItemComponentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [indentWidth, setIndentWidth] = useState(6);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateDimensions = () => {
      const width = contentRef.current?.offsetWidth || 0;
      setContentHeight(contentRef.current?.scrollHeight || 0);

      // Adjust indent based on container width
      if (width < 300) {
        setIndentWidth(4);
      } else if (width < 500) {
        setIndentWidth(6);
      } else {
        setIndentWidth(8);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, [content, isOpen]);

  return (
    <div className="border-l border-border pl-2">
      <button
        onClick={() => !isDisabled && onToggle(id)}
        disabled={isDisabled}
        className={`w-full text-left flex items-center gap-2 py-2 text-sm transition-colors ${
          isDisabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:text-primary cursor-pointer"
        } focus:outline-none focus:ring-1 focus:ring-ring`}
      >
        <span className="text-muted-foreground text-xs w-4 flex-shrink-0">
          {isOpen ? indicator.open : indicator.closed}
        </span>
        <span className="lowercase flex-1 min-w-0 truncate">{title}</span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 300ms ease-in-out",
        }}
      >
        <div
          ref={contentRef}
          className="text-xs text-muted-foreground border-l border-border/40 ml-2"
          style={{
            paddingLeft: `${indentWidth * 4}px`,
            paddingRight: "0.5rem",
            paddingBottom: "0.75rem",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
  disabled?: boolean;
  isOpen?: boolean;
  onToggle?: (id: string) => void;
  variant?: "single" | "double";
  className?: string;
}

export function AccordionItem({
  id,
  title,
  children,
  disabled = false,
  isOpen = false,
  onToggle,
  variant = "single",
  className = "",
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  const indicators = {
    single: { closed: "►", open: "▼" },
    double: { closed: "»", open: "«" },
  };

  const ind = indicators[variant];

  return (
    <div className={`border-l border-border pl-2 ${className}`}>
      <button
        onClick={() => !disabled && onToggle?.(id)}
        disabled={disabled}
        className={`w-full text-left flex items-center gap-2 py-2 text-sm transition-colors ${
          disabled
            ? "opacity-40 cursor-not-allowed"
            : "hover:text-primary cursor-pointer"
        } focus:outline-none focus:ring-1 focus:ring-ring`}
      >
        <span className="text-muted-foreground text-xs w-4">
          {isOpen ? ind.open : ind.closed}
        </span>
        <span className="lowercase">{title}</span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 300ms ease-in-out",
        }}
      >
        <div
          ref={contentRef}
          className="pl-6 pr-2 pb-3 text-xs text-muted-foreground border-l border-border/40 ml-2"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
