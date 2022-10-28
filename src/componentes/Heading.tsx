import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string
}

export function Heading({ size = "md", children, asChild , className}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx("hd-md", {
        "text-hd-lg": size === "sm",
        "text-hd-md": size === "md",
        "text-hd-sm": size === "lg",
      },
      className
      )}
    >
      {children}
    </Comp>
  );
}
