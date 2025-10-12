"use client";

import { useState } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import Alert from "@/registry/ascii/alert";
import Badge from "@/registry/ascii/badge";

export default function AlertPage() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">alert</h1>
            <Badge variant="outline" size="sm">
              available
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            notification boxes with ascii borders and icons
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Alert from "@/registry/ascii/alert";

<Alert variant="info" title="heads up">
  this is an informational alert message
</Alert>`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm">variants</h3>
              <div className="space-y-3">
                <Alert variant="default">
                  this is a default alert with minimal styling
                </Alert>

                <Alert variant="info" title="information">
                  this is an informational alert with a title
                </Alert>

                <Alert variant="success" title="success">
                  your changes have been saved successfully
                </Alert>

                <Alert variant="warning" title="warning">
                  this action cannot be undone. proceed with caution.
                </Alert>

                <Alert variant="destructive" title="error">
                  failed to save changes. please try again.
                </Alert>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">custom icons</h3>
              <div className="space-y-3">
                <Alert variant="info" icon="→" title="tip">
                  use keyboard shortcuts for faster navigation
                </Alert>

                <Alert variant="success" icon="✓" title="completed">
                  all tasks have been marked as done
                </Alert>

                <Alert variant="warning" icon="!">
                  you have unsaved changes
                </Alert>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">double border</h3>
              <div className="space-y-3">
                <Alert variant="info" border="double" title="important">
                  this message uses double border for emphasis
                </Alert>

                <Alert variant="destructive" border="double" title="critical">
                  system maintenance scheduled for tonight
                </Alert>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">without title</h3>
              <Alert variant="info">
                simple alert without a title, just the message content
              </Alert>
            </div>

            <div>
              <h3 className="mb-3 text-sm">dismissible</h3>
              <div className="space-y-2">
                {showDismissible && (
                  <Alert
                    variant="info"
                    title="dismissible alert"
                    dismissible
                    onDismiss={() => setShowDismissible(false)}
                  >
                    click the × button to dismiss this alert
                  </Alert>
                )}
                {!showDismissible && (
                  <button
                    onClick={() => setShowDismissible(true)}
                    className="text-sm text-primary hover:underline"
                  >
                    show alert again
                  </button>
                )}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">long content</h3>
              <Alert variant="default" title="detailed information">
                this is a longer alert message that contains multiple sentences.
                it demonstrates how the alert component handles longer text
                content while maintaining readability. the component will wrap
                text naturally and maintain proper spacing between the icon,
                title, and content areas.
              </Alert>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design notes</h2>
          <ul className="text-muted-foreground text-sm space-y-2">
            <li>
              • uses unicode block characters as background patterns (░▒▓)
            </li>
            <li>
              • each variant has semantic colors and default icons: ℹ ✓ ⚠ ×
            </li>
            <li>• supports single and double ascii borders</li>
            <li>
              • optional dismissible state with callback for state management
            </li>
            <li>• patterns render at low opacity behind content layer</li>
            <li>• maintains tui aesthetic with minimal styling</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
