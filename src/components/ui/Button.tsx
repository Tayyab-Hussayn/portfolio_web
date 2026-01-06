import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";

export function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(" ");
}

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
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
    };

    return (
        <Comp
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}
