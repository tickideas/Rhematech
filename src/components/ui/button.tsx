"use client";

import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  LinkProps & {
    href: string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--rt-color-primary-500)] hover:bg-[var(--rt-color-primary-600)] text-white shadow-[var(--rt-shadow-sm)]",
  secondary:
    "border border-[var(--rt-color-primary-500)] text-[var(--rt-color-primary-500)] hover:bg-[rgba(227,27,35,0.08)]",
  ghost:
    "text-[var(--rt-color-primary-500)] hover:bg-[rgba(227,27,35,0.12)]",
};

function getButtonClasses({ variant = "primary", className }: ButtonProps) {
  return cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-[var(--rt-radius-md)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em]",
    "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--rt-color-primary-500)]",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  );
}

export function Button(props: ButtonProps) {
  const { children, icon, variant = "primary" } = props;
  const className = getButtonClasses({ ...props, variant });

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} {...rest} className={className}>
        {icon}
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;

  return (
    <button type={type} {...rest} className={className}>
      {icon}
      {children}
    </button>
  );
}
