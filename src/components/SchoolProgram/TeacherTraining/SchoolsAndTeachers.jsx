import React from "react";
import { School, Users, CheckCircle2 } from "lucide-react";
import { schoolPoints, teacherPoints } from "./data";
import { PrimaryButton } from "./ui";

export default function SchoolsAndTeachers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* For Schools */}
        <div className="rounded-2xl bg-brand-blue/10 p-8">
          <School className="h-8 w-8 text-brand-blue-dark" />
          <h3 className="font-display mt-3 text-2xl font-extrabold text-brand-bg-dark">
            For Schools
          </h3>
          <p className="mt-1 text-brand-text-light">
            Train your faculty. Transform your classrooms.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:items-center">
            <ul className="space-y-3">
              {schoolPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-brand-text-light">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue" />
                  {p}
                </li>
              ))}
            </ul>
            <img
              src="https://picsum.photos/seed/buc-school/400/280"
              alt="Teacher training session at a school"
              className="rounded-xl object-cover shadow"
            />
          </div>

          <PrimaryButton className="mt-7">Contact Our Team</PrimaryButton>
        </div>

        {/* For Teachers */}
        <div className="relative overflow-hidden rounded-2xl bg-brand-orange/10 p-8">
          <Users className="h-8 w-8 text-brand-orange-dark" />
          <h3 className="font-display mt-3 text-2xl font-extrabold text-brand-bg-dark">
            For Teachers / Educators
          </h3>
          <p className="mt-1 text-brand-text-light">
            Are you a teacher looking to learn, collaborate or work with
            Brain Up Labs?
          </p>

          <ul className="mt-6 space-y-3">
            {teacherPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-brand-text-light">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange-dark" />
                {p}
              </li>
            ))}
          </ul>

          <PrimaryButton className="mt-7">Submit Your Details</PrimaryButton>

          <p className="pointer-events-none absolute bottom-4 right-4 hidden -rotate-6 font-display text-sm italic text-brand-orange-dark/70 sm:block">
            Same Curiosity
            <br />
            Bigger Possibilities.
          </p>
        </div>
      </div>
    </section>
  );
}