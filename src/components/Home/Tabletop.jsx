import React from "react";
import {
  FlaskConical,
  School,
  Database,
  Armchair,
  Users,
  ArrowRight,
  GraduationCap,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import productPhoto from "../../assets/image.jpeg";

const features = [
  {
    icon: School,
    iconBg: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
    title: "No Separate Lab Setup",
    body: "Our kits work inside existing classrooms without any infrastructure changes.",
  },
  {
    icon: Database,
    iconBg: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
    title: "Low Infrastructure Cost",
    body: "No renovation, special wiring or dedicated lab space required.",
  },
  {
    icon: Armchair,
    iconBg: "bg-brand-yellow/10",
    iconColor: "text-brand-yellow",
    title: "Works in Regular Classrooms",
    body: "Set up on any standard desk or table in minutes.",
  },
  {
    icon: Users,
    iconBg: "bg-brand-orange-dark/10",
    iconColor: "text-brand-orange-dark",
    title: "Teacher-Friendly",
    body: "Step-by-step guides make every teacher an STEM expert.",
  },
];

const stats = [
  {
    icon: GraduationCap,
    color: "text-brand-bg-dark",
    title: "Grade 4 – 8",
    body: "Complete STEM progression",
  },
  {
    icon: ClipboardList,
    color: "text-brand-blue",
    title: "Project-Based Learning",
    body: "Hands-on and practical",
  },
  {
    icon: BarChart3,
    color: "text-brand-yellow",
    title: "Curriculum Aligned",
    body: "Mapped with NEP and grade-wise learning outcomes",
  },
  {
    icon: Users,
    color: "text-brand-orange",
    title: "Teacher Training",
    body: "Continuous support and resources",
  },
];

export default function Tabletop({
  photoSrc = productPhoto,
  onExploreClick,
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-orange-dark">
              <FlaskConical className="h-3.5 w-3.5" />
              OUR INNOVATION
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-bg-dark sm:text-5xl">
              LABS...!
              <br />
              <span className="text-brand-orange">Table-Top</span> Solutions
            </h1>

            <p className="mt-4 max-w-md text-lg text-brand-text-light">
              Hands-on STEM learning that fits into the classroom you already
              have.
            </p>

            <div className="mt-3 h-1 w-14 rounded-full bg-brand-orange" />

            <ul className="mt-8 space-y-6">
              {features.map(({ icon: Icon, iconBg, iconColor, title, body }) => (
                <li key={title} className="flex items-start gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-bg-dark">{title}</p>
                    <p className="mt-0.5 text-sm text-brand-text-light">{body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onExploreClick}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              Explore Our Kits
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right: product photo */}
          <div className="relative">
            <img
              src={photoSrc}
              alt="Brain Up Labs STEM kit box with components laid out on a table"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-8 rounded-2xl bg-brand-orange/5 px-8 py-8 sm:grid-cols-4">
          {stats.map(({ icon: Icon, color, title, body }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className={`h-6 w-6 shrink-0 ${color}`} />
              <div>
                <p className="text-sm font-semibold text-brand-bg-dark">
                  {title}
                </p>
                <p className="mt-0.5 text-xs text-brand-text-light">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}