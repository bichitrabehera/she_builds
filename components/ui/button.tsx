import React, { type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  color?: string;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      color,
      href,
      external,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const linkProps = external
      ? {
          target: "_blank",
          rel: "noopener noreferrer" as const,
        }
      : {};

    if (variant === "primary") {
      return (
        <a
          ref={ref}
          href={href}
          className={cn(
            "group relative inline-block cursor-pointer select-none touch-manipulation",
            className,
          )}
          {...linkProps}
          {...props}
        >
          {/* Shadow */}
          <span
            className="
              absolute inset-0 rounded-lg
              bg-black/20
              translate-y-[1px]
              transition-transform duration-[600ms]
              ease-[cubic-bezier(.3,.7,.4,1)]
              group-hover:translate-y-[2px]
              group-active:translate-y-[1px]
            "
          />

          

          {/* Front */}
          <span
            className="
              relative inline-flex items-center justify-center
              rounded-lg
              bg-orange-700
              px-4 py-2
              text-sm font-medium text-white
              -translate-y-1
              transition-transform duration-[600ms]
              ease-[cubic-bezier(.3,.7,.4,1)]
              group-hover:-translate-y-1.5
              group-active:-translate-y-0.5
            "
          >
            {children}
          </span>
        </a>
      );
    }

    if (variant === "secondary") {
      return (
        <a
          ref={ref}
          href={href}
          className={cn(
            "inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50",
            className,
          )}
          {...linkProps}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-900",
          className,
        )}
        {...linkProps}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Button.displayName = "Button";

