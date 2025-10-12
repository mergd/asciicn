"use client";

import { useState } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import Dialog from "@/registry/ascii/dialog";
import Button from "@/registry/ascii/button";
import Badge from "@/registry/ascii/badge";

export default function DialogPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [smallOpen, setSmallOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [footerOpen, setFooterOpen] = useState(false);
  const [noTitleOpen, setNoTitleOpen] = useState(false);

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">dialog</h1>
            <Badge variant="outline" size="sm">
              available
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            modal dialog with backdrop and ascii borders
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Dialog from "@/registry/ascii/dialog";

const [open, setOpen] = useState(false);

<Dialog onClose={() => setOpen(false)} title="dialog title">
  your content here
</Dialog>`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm">basic dialog</h3>
              <Button variant="secondary" onClick={() => setBasicOpen(true)}>
                open dialog
              </Button>

              {basicOpen && (
                <Dialog
                  onClose={() => setBasicOpen(false)}
                  title="basic dialog"
                >
                  <p className="text-sm text-foreground">
                    this is a basic dialog with a title and close button. press
                    esc or click [x] to close.
                  </p>
                </Dialog>
              )}
            </div>

            <div>
              <h3 className="mb-3 text-sm">sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="secondary" onClick={() => setSmallOpen(true)}>
                  small
                </Button>
                <Button variant="secondary" onClick={() => setLargeOpen(true)}>
                  large
                </Button>
              </div>

              {smallOpen && (
                <Dialog
                  onClose={() => setSmallOpen(false)}
                  title="small dialog"
                  size="sm"
                >
                  <p className="text-sm text-foreground">
                    this is a small dialog (max-w-sm)
                  </p>
                </Dialog>
              )}

              {largeOpen && (
                <Dialog
                  onClose={() => setLargeOpen(false)}
                  title="large dialog"
                  size="lg"
                >
                  <p className="text-sm text-foreground">
                    this is a large dialog (max-w-lg). it has more space for
                    content and can accommodate longer text or more complex
                    layouts.
                  </p>
                </Dialog>
              )}
            </div>

            <div>
              <h3 className="mb-3 text-sm">with footer</h3>
              <Button variant="secondary" onClick={() => setFooterOpen(true)}>
                open with actions
              </Button>

              {footerOpen && (
                <Dialog
                  onClose={() => setFooterOpen(false)}
                  title="confirm action"
                  footer={
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => setFooterOpen(false)}
                      >
                        cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => setFooterOpen(false)}
                      >
                        confirm
                      </Button>
                    </>
                  }
                >
                  <p className="text-sm text-foreground">
                    are you sure you want to continue? this action will do
                    something important.
                  </p>
                </Dialog>
              )}
            </div>

            <div>
              <h3 className="mb-3 text-sm">no title</h3>
              <Button variant="secondary" onClick={() => setNoTitleOpen(true)}>
                open without title
              </Button>

              {noTitleOpen && (
                <Dialog onClose={() => setNoTitleOpen(false)}>
                  <div className="space-y-3">
                    <h3 className="text-base font-bold">custom header</h3>
                    <p className="text-sm text-muted-foreground">
                      you can omit the title prop and create your own header
                      structure. note: without a title, there's no built-in
                      close button, so you'll need to provide your own way to
                      close (esc key still works).
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => setNoTitleOpen(false)}
                    >
                      close
                    </Button>
                  </div>
                </Dialog>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">props</h2>
          <div className="border border-border">
            <div className="grid grid-cols-3 gap-4 p-3 border-b border-border bg-muted/30 text-xs font-semibold">
              <div>prop</div>
              <div>type</div>
              <div>default</div>
            </div>
            <div className="divide-y divide-border text-xs">
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="font-mono">children</div>
                <div className="text-muted-foreground">ReactNode</div>
                <div className="text-muted-foreground">-</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="font-mono">onClose</div>
                <div className="text-muted-foreground">() =&gt; void</div>
                <div className="text-muted-foreground">-</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="font-mono">title</div>
                <div className="text-muted-foreground">string</div>
                <div className="text-muted-foreground">undefined</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="font-mono">footer</div>
                <div className="text-muted-foreground">ReactNode</div>
                <div className="text-muted-foreground">undefined</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="font-mono">size</div>
                <div className="text-muted-foreground">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; |
                  &quot;xl&quot;
                </div>
                <div className="text-muted-foreground">&quot;md&quot;</div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="font-mono">className</div>
                <div className="text-muted-foreground">string</div>
                <div className="text-muted-foreground">&quot;&quot;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design notes</h2>
          <ul className="list-none space-y-2 text-sm text-muted-foreground">
            <li>• press esc to close any dialog</li>
            <li>
              • backdrop has blur effect for visual depth without breaking tui
              aesthetic
            </li>
            <li>• close button uses bracket notation [x]</li>
            <li>• optional footer for action buttons</li>
            <li>• content area scrolls if needed</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
