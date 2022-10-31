import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface DisplayProps {
  size?: "sm" | "md" | "lg" | "xl" | "session" | "aside"| "pic" | "";
  children: ReactNode;
  asChild?: boolean;
  className?: string
}

export function Display({ size = "sm", children, asChild , className}: DisplayProps) {
  const Comp = asChild ? Slot : "nav";

  return (
    <Comp
      className={clsx("flex flex-row rounded-md", {
        "ds-sm": size === "sm",
        "ds-md": size === "md",
        "ds-lg": size === "lg",
        "ds-xl": size === "xl",
        "ds-session": size === "session",
        "ds-aside": size === "aside",
        "ds-pic": size === "pic",
        "": size === "",


      },
      className
      )}
    >
      {children}
    </Comp>
  );
}
