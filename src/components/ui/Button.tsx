import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Button({
    className,
    variant = "primary",
    size = "md",
    asChild = false,
    ...props
}: ComponentProps<"button"> & {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}) {
    const Comp = asChild ? Slot : "button";

    const variants = {
        // Primary: Brand color background, white text.
        primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
        // Secondary: Light gray background, dark text (good for light mode).
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        // Outline: White background with border, good for neutral actions.
        outline: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100",
        // Ghost: Transparent.
        ghost: "hover:bg-gray-100 hover:text-gray-900",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-6 py-2", // Increased default size slightly
        lg: "h-12 px-8 text-lg",
    };

    return (
        <Comp
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}
