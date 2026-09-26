import React from "react";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

export function OutlineButton({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg border-2 border-brand-bg-dark px-6 py-3 text-sm font-semibold text-brand-bg-dark transition-colors hover:bg-brand-bg-dark hover:text-white ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

export function Field({ label, required, children, span = 1 }) {
  return (
    <div className={span === 2 ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-sm font-medium text-brand-text-light">
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      {children}
    </div>
  );
}

export const inputClasses =
  "w-full rounded-lg border border-brand-border bg-white px-3.5 py-2.5 text-sm text-brand-bg-dark2 placeholder:text-brand-text-muted focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20";