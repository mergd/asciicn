"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
  icon?: string;
  key?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuProps {
  sections: MenuSection[];
}

export default function Menu({ sections }: MenuProps) {
  const pathname = usePathname();

  return (
    <nav className="space-y-4">
      {sections.map((section, idx) => (
        <div key={idx}>
          <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
            {section.title}
          </div>
          <div className="space-y-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group flex items-center border-l px-3 py-1.5 text-sm transition-all
                    focus:outline-none focus:ring-1 focus:ring-ring
                    ${
                      isActive
                        ? "border-primary bg-accent/50 text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:bg-accent/30 hover:text-foreground"
                    }
                  `}
                >
                  {item.icon && (
                    <span className="mr-2" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.key && (
                    <span className="ml-2 text-xs opacity-40">^{item.key}</span>
                  )}
                  {isActive && (
                    <span className="ml-1 text-primary text-xs">◄</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export { Menu };
