import React from "react";
import { ArrowRight } from "lucide-react";
import { steps, perks } from "./data";

export default function ProcessAndPerks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-brand-bg-dark">
            How Our Training Works
          </h2>
          <p className="mt-2 text-brand-text-light">
            A simple, practical and effective learning journey.
          </p>

          <div className="mt-8 flex items-start gap-1 overflow-x-auto sm:gap-2">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <React.Fragment key={title}>
                <div className="flex w-24 flex-col items-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                    <Icon className="h-6 w-6 text-brand-blue" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-brand-bg-dark">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-brand-text-muted">{desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="mt-6 h-4 w-4 shrink-0 text-brand-border" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-extrabold text-brand-bg-dark">
            What Teachers Get
          </h2>
          <p className="mt-2 text-brand-text-light">
            More than just training – a complete learning experience.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-x-2 gap-y-8 sm:grid-cols-5">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/10">
                  <Icon className="h-6 w-6 text-brand-orange" />
                </span>
                <p className="mt-3 text-xs font-semibold text-brand-text-light">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}