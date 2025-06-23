import * as React from "react";

export function Accordion({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div {...props} style={{ borderRadius: 8, background: "#e5e5e5", padding: 16, ...props.style }}>{children}</div>
  );
}

export function AccordionItem({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div {...props} style={{ marginBottom: 12, ...props.style }}>{children}</div>
  );
}

export function AccordionTrigger({ children, onClick, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const [open, setOpen] = React.useState(false);
  return (
    <button
      {...props}
      onClick={e => {
        setOpen((v) => !v);
        if (onClick) onClick(e);
      }}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        background: "#f3f3f3",
        border: "1px solid #bbb",
        borderRadius: 4,
        padding: "8px 12px",
        fontWeight: 500,
        marginBottom: 4,
        cursor: "pointer",
        ...props.style
      }}
      aria-expanded={open}
    >
      {children}
      <span style={{ float: "right" }}>{open ? "▲" : "▼"}</span>
    </button>
  );
}

export function AccordionContent({ children, open, ...props }: React.PropsWithChildren<{ open?: boolean } & React.HTMLAttributes<HTMLDivElement>>) {
  // For this simple version, always render children
  return (
    <div {...props} style={{ background: "#fafafa", border: "1px solid #ddd", borderRadius: 4, padding: 12, marginBottom: 8, ...props.style }}>
      {children}
    </div>
  );
}
