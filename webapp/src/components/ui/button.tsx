import * as React from "react";

export function Button({ children, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      style={{
        background: "#888",
        color: "#fff",
        border: "2px solid #444",
        borderRadius: 24,
        fontWeight: 600,
        fontSize: 20,
        padding: "8px 24px",
        margin: 4,
        cursor: "pointer",
        ...props.style,
      }}
    >
      {children}
    </button>
  );
}
