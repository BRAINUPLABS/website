import React from "react";
import { ArrowRight } from "lucide-react";
import { programs } from "./data";
import { OutlineButton } from "./ui";

export default function Programs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-brand-bg-dark">
            Our Training Programs
          </h2>
          <p className="mt-2 text-brand-text-light">
            Explore our focused training modules designed for today's
            educators.
          </p>
        </div>
        <OutlineButton className="border-brand-border text-brand-text-light hover:border-brand-bg-dark">
          View All Programs
        </OutlineButton>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {programs.map(({ icon: Icon, bg, title, desc }) => (
          <div
            key={title}
            className={`flex flex-col rounded-xl ${bg} p-6 ring-1 ring-black/5`}
          >
            <Icon className="h-8 w-8 text-brand-text-light" />
            <h3 className="font-display mt-4 text-lg font-bold text-brand-bg-dark">
              {title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-brand-text-light">{desc}</p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark"
            >
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}