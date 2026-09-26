import React from "react";
import { heroFeatures } from "./data";
import { PrimaryButton, OutlineButton } from "./ui";

export default function Hero() {
  return (
    <section className="mt-20 mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-orange">
            Teacher Training
          </p>
          <h1 className="font-display mt-3 text-4xl font-extrabold leading-tight text-brand-bg-dark sm:text-5xl">
            Empowering Educators.
            <br />
            <span className="text-brand-orange">Inspiring Innovation.</span>
          </h1>
          <p className="mt-5 max-w-lg text-brand-text-light">
            Practical, hands-on training in AI, Robotics, IoT, Coding and
            STEM to help teachers bring real-world learning into
            classrooms.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <PrimaryButton>Get Information</PrimaryButton>
            <OutlineButton>For Schools</OutlineButton>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {heroFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <Icon className="h-6 w-6 text-brand-text-light" />
                <span className="text-sm font-medium text-brand-text-light">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/buc-hero/800/560"
            alt="Teachers building a robotics project together"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="absolute right-4 top-4 hidden -rotate-3 rounded-lg bg-white/90 px-4 py-3 text-right shadow-md backdrop-blur sm:block">
            <p className="font-display text-lg italic text-brand-bg-dark2">
              Teachers Build
              <br />
              Brighter Tomorrows
            </p>
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-xl bg-white p-4 shadow-xl sm:block">
            <p className="text-sm font-semibold text-brand-bg-dark2">
              Hands-on Learning for a Brighter Tomorrow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}