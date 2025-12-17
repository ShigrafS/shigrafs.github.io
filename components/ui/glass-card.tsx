import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ children, className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-card/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-sm",
                    "transition-all duration-300",
                    hoverEffect && "hover:bg-card/80 hover:scale-[1.01] hover:shadow-md",
                    "data-[theme=arch]:border-primary/50 data-[theme=arch]:rounded-none data-[theme=arch]:bg-black/90",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GlassCard.displayName = "GlassCard";
