import React from "react";
import {
  ArrowRight,
  Users,
  Lightbulb,
  Trophy,
  Award,
  Building2,
  Search,
  Wrench,
  Rocket,
  Presentation,
  Medal,
  UserCheck,
} from "lucide-react";

/**
 * Brain Up Labs — Hackathons landing page
 * Navbar and footer intentionally excluded (per request).
 * Drop this component into a page wrapper that already has your
 * nav and footer, e.g.:
 *
 *   <Navbar />
 *   <HackathonsPage />
 *   <Footer />
 */

const stats = [
  { value: "10+", label: "Hackathons Participated" },
  { value: "5+", label: "Awards & Recognitions" },
  { value: "20+", label: "Innovative Projects" },
  { value: "500+", label: "Students Impacted" },
];

const journeySteps = [
  { icon: Users, title: "Participated", desc: "Learned & grew" },
  { icon: Lightbulb, title: "Built", desc: "Turned ideas into prototypes" },
  { icon: Trophy, title: "Competed", desc: "Showcased on bigger stages" },
  { icon: Award, title: "Won", desc: "Earned recognition" },
  { icon: Building2, title: "Now Organizing", desc: "Creating opportunities for future innovators" },
];

const achievements = [
  {
    title: "Alspire UP Hackathon",
    badge: "Winner",
    project: "Eco PowerHive",
    year: "2025",
    location: "Lucknow",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "IIT Lucknow Hackathon",
    badge: "Finalist",
    project: "Carbon Footprint Tracker",
    year: "2024",
    location: "Lucknow",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "DevFest Jaipur",
    badge: "Top Teams",
    project: "AI Resume Analyzer",
    year: "2024",
    location: "Jaipur",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI Bootcamp Hackathon",
    badge: "Selected",
    project: "Smart Campus Solution",
    year: "2024",
    location: "Jaipur",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
];

const techTags = ["ESP32", "YOLOv8", "Computer Vision", "IoT", "MediaPipe", "AI"];

const schoolSteps = [
  { num: "01", icon: Search, title: "Problem", desc: "Identify real-world challenges" },
  { num: "02", icon: Lightbulb, title: "Ideate", desc: "Brainstorm solutions" },
  { num: "03", icon: Wrench, title: "Build", desc: "Develop prototypes" },
  { num: "04", icon: UserCheck, title: "Mentor", desc: "Get guidance from experts" },
  { num: "05", icon: Presentation, title: "Pitch", desc: "Present to a jury" },
  { num: "06", icon: Medal, title: "Win", desc: "Get recognized and celebrated" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
];

function Badge({ children }) {
  return (
    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
      {children}
    </span>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-sm font-semibold tracking-wide text-orange-400">
      {children}
    </p>
  );
}

export default function Hackathon() {
  return (
    <div className="bg-[#0b0f1a] text-white">
      {/* ---------------- HERO ---------------- */}
      <section className="border-b border-white/10 px-6 py-16 md:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Hackathons at Brain Up Labs</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Build. Innovate.{" "}
              <span className="text-orange-400">Win.</span>
            </h1>
            <p className="mt-6 max-w-md text-slate-300">
              From participating in national hackathons to organizing
              innovation challenges in schools, we believe in giving every
              student a platform to turn ideas into real solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                Our Achievements <ArrowRight size={18} />
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Organize a Hackathon
              </button>
            </div>
            <p className="mt-8 -rotate-1 font-serif italic text-slate-400">
              Ideas today. A better tomorrow.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Winning team holding a prize cheque at the Alspire UP Hackathon"
                className="h-80 w-full object-cover sm:h-96"
              />
            </div>
            <p className="absolute right-2 top-4 max-w-[120px] -rotate-3 font-serif italic text-sm text-slate-300 sm:right-6">
              Students who build change the world
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-b border-white/10 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
          <blockquote className="max-w-xs border-l-2 border-orange-400 pl-4 text-sm italic text-slate-300">
            "Not just participants. We create the next generation of
            innovators."
            <footer className="mt-2 not-italic text-slate-500">
              — Brain Up Labs
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ---------------- JOURNEY ---------------- */}
      <section className="border-b border-white/10 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Our Hackathon Journey</Eyebrow>
              <h2 className="text-3xl font-bold sm:text-4xl">
                From Participants to Organizers
              </h2>
            </div>
            <p className="text-slate-300">
              We started as a team of curious learners, participated in
              hackathons, built real-world solutions, won recognitions, and
              now we bring the same experience to schools across the
              country.
            </p>
          </div>

          <div className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />
            {journeySteps.map((step) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0f1a] ring-2 ring-orange-400">
                  <step.icon size={20} className="text-orange-400" />
                </div>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 max-w-[9rem] text-xs text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ACHIEVEMENTS ---------------- */}
      <section className="border-b border-white/10 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Our Achievements</Eyebrow>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Hackathons We've Been Part Of
              </h2>
            </div>
            <button className="flex items-center gap-1 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">
              View All Achievements <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <img src={a.img} alt={a.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="font-semibold">{a.title}</p>
                    <Badge>{a.badge}</Badge>
                  </div>
                  <p className="text-sm text-slate-400">Project: {a.project}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Year: {a.year} &nbsp;·&nbsp; Location: {a.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECT ---------------- */}
      <section className="border-b border-white/10 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Featured Project</Eyebrow>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Eco PowerHive
            </h2>
            <p className="mb-6 text-slate-300">
              AI-powered smart lighting system that combines computer
              vision, IoT and automation to optimize energy usage.
            </p>
            <button className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Explore Project <ArrowRight size={18} />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
              alt="Eco PowerHive smart lighting prototype"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold text-slate-400">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-2">
                {techTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 px-3 py-1 text-sm text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <blockquote className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-serif italic text-slate-300">
              "Real problems. Real solutions. That's what we build."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ---------------- SCHOOL HACKATHONS ---------------- */}
      <section className="bg-slate-100 px-6 py-16 text-slate-900 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide text-orange-500">
                School Hackathons
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                We Bring Hackathons to Schools
              </h2>
              <p className="mt-4 max-w-md text-slate-600">
                Give your students a platform to identify real-world
                problems, build solutions and present their ideas to a jury.
              </p>
            </div>
            <div className="lg:justify-self-start">
              <button className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                Organize a Hackathon <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {schoolSteps.map((s) => (
                <div
                  key={s.num}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <s.icon size={20} className="mb-3 text-orange-500" />
                  <p className="text-xs font-semibold text-slate-400">{s.num}</p>
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1560523159-4a9692d222f8?q=80&w=900&auto=format&fit=crop"
                alt="School students presenting a robotics project"
                className="h-80 w-full object-cover"
              />
              <p className="absolute right-4 top-4 -rotate-2 font-serif italic text-sm text-white drop-shadow">
                Young Minds. Big Ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="border-b border-white/10 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Inside Our Hackathons</Eyebrow>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Moments That Inspire
              </h2>
            </div>
            <button className="flex items-center gap-1 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">
              View Gallery <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryImages.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Hackathon moment ${i + 1}`}
                  className="h-32 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12">
        <img
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0b0f1a]/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
              Your Students Have Ideas. Let's Give Them a Platform.
            </h2>
            <p className="mt-4 max-w-md text-slate-300">
              Organize a hackathon with Brain Up Labs and be a part of the
              innovation movement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                Partner With Us <ArrowRight size={18} />
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Talk to Our Team
              </button>
            </div>
          </div>

          <ul className="space-y-2 font-serif italic text-slate-200">
            <li>More Innovators</li>
            <li>✓ More Problem Solvers</li>
            <li>✓ A Better Tomorrow</li>
          </ul>
        </div>
      </section>
    </div>
  );
}