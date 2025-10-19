"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Menu from "@/registry/ascii/menu";
import Badge from "@/registry/ascii/badge";

const menuSections = [
  {
    title: "getting started",
    items: [
      { label: "introduction", href: "/", icon: "󰎕", key: "i" },
      { label: "installation", href: "/installation", icon: "󰈞", key: "s" },
    ],
  },
  {
    title: "components",
    items: [
      { label: "input", href: "/components/input", icon: "󰌘", key: "1" },
      { label: "badge", href: "/components/badge", icon: "󰏷", key: "2" },
      { label: "button", href: "/components/button", icon: "󰒃", key: "3" },
      { label: "radio", href: "/components/radio", icon: "󰮯", key: "4" },
      { label: "checkbox", href: "/components/checkbox", icon: "󰄬", key: "c" },
      { label: "card", href: "/components/card", icon: "󰨶", key: "7" },
      {
        label: "accordion",
        href: "/components/accordion",
        icon: "󰝥",
        key: "8",
      },
      { label: "progress", href: "/components/progress", icon: "󰀼", key: "9" },
      { label: "dialog", href: "/components/dialog", icon: "󰆧", key: "5" },
      { label: "dropdown", href: "/components/dropdown", icon: "󰍉", key: "6" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "k":
            e.preventDefault();
            setShowShortcuts((prev) => !prev);
            break;
          case "i":
            e.preventDefault();
            router.push("/");
            break;
          case "s":
            e.preventDefault();
            router.push("/installation");
            break;
          case "1":
            e.preventDefault();
            router.push("/components/input");
            break;
          case "2":
            e.preventDefault();
            router.push("/components/badge");
            break;
          case "3":
            e.preventDefault();
            router.push("/components/button");
            break;
          case "4":
            e.preventDefault();
            router.push("/components/radio");
            break;
          case "5":
            e.preventDefault();
            router.push("/components/dialog");
            break;
          case "6":
            e.preventDefault();
            router.push("/components/dropdown");
            break;
          case "7":
            e.preventDefault();
            router.push("/components/card");
            break;
          case "8":
            e.preventDefault();
            router.push("/components/accordion");
            break;
          case "9":
            e.preventDefault();
            router.push("/components/progress");
            break;
          case "c":
            e.preventDefault();
            router.push("/components/checkbox");
            break;
        }
      }
      if (e.key === "Escape") {
        setShowShortcuts(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* header */}
      <header className="border-b border-border bg-background">
        <div className="container px-4">
          <div className="flex h-12 items-center justify-between text-sm">
            <Link href="/" className="flex items-center gap-2">
              <span>󰅨 asciicn</span>
              <Badge variant="primary" size="sm">
                v0.1
              </Badge>
            </Link>
            <Link
              href="https://weekend.fldr.zip"
              className="flex items-center gap-2"
            >
              <span>󰻙 Weekend</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="https://github.com/mergd/asciicn"></Link>
              <button
                onClick={() => setShowShortcuts((prev) => !prev)}
                className="hidden md:inline text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-ring"
                aria-label="Toggle keyboard shortcuts"
              >
                [^k]
              </button>
              <span className="hidden lg:inline text-xs text-muted-foreground">
                ░▒▓█
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* shortcuts modal */}
      {showShortcuts && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => setShowShortcuts(false)}
        >
          <div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md border border-border bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-border p-3 flex items-center justify-between text-sm">
              <span>keyboard shortcuts</span>
              <button
                onClick={() => setShowShortcuts(false)}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-ring"
              >
                [x]
              </button>
            </div>
            <div className="p-3 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">toggle panel</span>
                <span>^k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">introduction</span>
                <span>^i</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">installation</span>
                <span>^s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">input</span>
                <span>^1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">badge</span>
                <span>^2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">button</span>
                <span>^3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">radio</span>
                <span>^4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">checkbox</span>
                <span>^c</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">dialog</span>
                <span>^5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">dropdown</span>
                <span>^6</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">card</span>
                <span>^7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">accordion</span>
                <span>^8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">progress</span>
                <span>^9</span>
              </div>
            </div>
            <div className="border-t border-border p-2 text-xs text-muted-foreground">
              press [esc] to close
            </div>
          </div>
        </div>
      )}

      {/* main content */}
      <div className="container flex-1 px-4">
        <div className="flex h-full">
          {/* sidebar */}
          <aside className="hidden md:block w-56 border-r border-border">
            <div className="py-4 pr-4">
              <Menu sections={menuSections} />
            </div>
          </aside>

          {/* content */}
          <main className="flex-1 py-6 md:pl-8 lg:pl-12">
            <div className="mx-auto w-full max-w-3xl">{children}</div>
          </main>
        </div>
      </div>

      {/* footer */}
      <footer className="border-t border-border mt-auto">
        <div className="container px-4">
          <div className="flex h-10 items-center justify-between text-xs text-muted-foreground">
            <span>next.js • tailwind • meslo nerd font</span>
            <span>[^k]</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
