import DocsLayout from "@/components/layout/docs-layout";
import Accordion, { AccordionItem } from "@/registry/ascii/accordion";
import Badge from "@/registry/ascii/badge";

export default function AccordionPage() {
  const basicItems = [
    {
      id: "item-1",
      title: "what is this?",
      content:
        "this is an accordion component built with ascii indicators. it uses ► and ▼ characters to show open/closed states.",
    },
    {
      id: "item-2",
      title: "how does it work?",
      content:
        "click on any item to expand or collapse it. the component supports both single and multiple open items at once.",
    },
    {
      id: "item-3",
      title: "is it accessible?",
      content:
        "yes! it includes proper focus states, keyboard navigation support, and disabled states for items that shouldn't be interactive.",
    },
  ];

  const variantItems = [
    {
      id: "v1",
      title: "single variant",
      content: "uses ► and ▼ characters for indicators",
    },
    {
      id: "v2",
      title: "double variant",
      content: "uses » and « characters for indicators",
    },
  ];

  const multipleItems = [
    {
      id: "m1",
      title: "installation",
      content:
        "run: npx shadcn@latest add https://asciicn.com/r/accordion.json",
    },
    {
      id: "m2",
      title: "configuration",
      content: "no additional configuration needed. works out of the box.",
    },
    {
      id: "m3",
      title: "usage",
      content: "import and use the accordion component with your data array.",
    },
  ];

  const disabledItems = [
    {
      id: "d1",
      title: "enabled item",
      content: "this item can be opened and closed normally",
    },
    {
      id: "d2",
      title: "disabled item",
      content: "you won't see this",
      disabled: true,
    },
    {
      id: "d3",
      title: "another enabled item",
      content: "this one works too",
    },
  ];

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">accordion</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            collapsible sections with ascii expand/collapse indicators
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
            npx shadcn@latest add https://asciicn.com/r/accordion.json
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Accordion from "@/registry/ascii/accordion";

const items = [
  {
    id: "item-1",
    title: "first item",
    content: "content for first item",
  },
  {
    id: "item-2",
    title: "second item",
    content: "content for second item",
  },
];

<Accordion items={items} type="single" />`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm">basic accordion</h3>
              <div className="max-w-2xl">
                <Accordion
                  items={basicItems}
                  type="single"
                  defaultValue="item-1"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">type: single vs multiple</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">
                    single (only one open at a time)
                  </div>
                  <Accordion items={variantItems} type="single" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-2">
                    multiple (multiple can be open)
                  </div>
                  <Accordion
                    items={multipleItems}
                    type="multiple"
                    defaultValue={["m1", "m2"]}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">border variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">
                    single border (► ▼)
                  </div>
                  <Accordion
                    items={variantItems}
                    type="single"
                    variant="single"
                  />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-2">
                    double border (» «)
                  </div>
                  <Accordion
                    items={variantItems}
                    type="single"
                    variant="double"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">with disabled items</h3>
              <div className="max-w-2xl">
                <Accordion items={disabledItems} type="single" />
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                disabled items are shown with reduced opacity and cannot be
                interacted with
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design details</h2>
          <p className="text-muted-foreground text-sm">
            accordion uses ascii arrow characters to indicate state:
          </p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>single variant: ► (closed) ▼ (open)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>double variant: » (closed) « (open)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>smooth slide-in animation with fade effect</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>left border for visual hierarchy</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">character set</h2>
          <div className="border border-border bg-muted/30 p-4 space-y-2">
            <div className="text-sm">
              <div className="text-muted-foreground text-xs mb-1">
                single indicators:
              </div>
              <div className="text-xl tracking-wider">► ▼</div>
            </div>
            <div className="text-sm">
              <div className="text-muted-foreground text-xs mb-1">
                double indicators:
              </div>
              <div className="text-xl tracking-wider">» «</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">props</h2>
          <div className="border border-border text-xs">
            <div className="grid grid-cols-4 gap-2 border-b border-border bg-muted/30 p-2">
              <div>prop</div>
              <div>type</div>
              <div>default</div>
              <div>description</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>items</div>
              <div className="text-muted-foreground">array</div>
              <div className="text-muted-foreground">required</div>
              <div className="text-muted-foreground">accordion items</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>type</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"single"</div>
              <div className="text-muted-foreground">single/multiple</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>variant</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"single"</div>
              <div className="text-muted-foreground">indicator style</div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
              <div>defaultValue</div>
              <div className="text-muted-foreground">string|array</div>
              <div className="text-muted-foreground">-</div>
              <div className="text-muted-foreground">initially open</div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
