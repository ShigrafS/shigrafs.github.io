import { cn } from "@/lib/utils";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glass" | "terminal" | "primary";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "md", asChild = false, ...props }, ref) => {

        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    // Variants
                    (variant === "default" || variant === "primary") &&
                    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
                    variant === "destructive" &&
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    variant === "outline" &&
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    variant === "secondary" &&
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    variant === "ghost" &&
                    "hover:bg-accent hover:text-accent-foreground",
                    variant === "link" &&
                    "text-primary underline-offset-4 hover:underline",
                    variant === "glass" &&
                    "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-foreground shadow-sm",
                    variant === "terminal" &&
                    "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 rounded-none font-mono",
                    // Sizes
                    size === "sm" && "h-8 px-3 text-xs",
                    size === "md" && "h-10 px-4 py-2",
                    size === "lg" && "h-12 px-8 text-lg",
                    size === "icon" && "h-10 w-10",
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
