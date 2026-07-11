import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Reuses the brand `.btn` design-system classes (navy + gold).
const buttonVariants = cva("btn", {
  variants: {
    variant: {
      primary: "btn--primary",
      secondary: "btn--secondary",
      ghost: "btn--ghost",
    },
    size: {
      default: "",
      sm: "btn--small",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
