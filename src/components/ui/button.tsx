import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "focus-ring inline-flex min-h-11 items-center justify-center font-sans text-xs font-semibold uppercase transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary px-5 text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        primary: "bg-primary px-5 text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        outline: "border border-current px-5 hover:bg-foreground hover:text-background",
        ghost: "px-2 hover:text-accent",
        icon: "size-11",
        destructive: "bg-destructive px-5 text-destructive-foreground",
        secondary: "bg-secondary px-5 text-secondary-foreground",
        link: "underline underline-offset-4",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";