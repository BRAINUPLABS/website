import React, { useState } from "react";
import { Upload } from "lucide-react";
import { gallery } from "./data";
import { Field, inputClasses, PrimaryButton, OutlineButton } from "./ui";

export default function FormAndGallery() {
  const [form, setForm] = useState({});
  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <div>
          <h2 className="font-display text-2xl font-extrabold text-brand-bg-dark">
            Get Information About Teacher Training
          </h2>
          <p className="mt-2 text-brand-text-light">
            Fill out the form and our team will get back to you with
            details about our training programs.
          </p>

          <form
            className="mt-6 grid gap-5 sm:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Full Name" required>
              <input
                className={inputClasses}
                placeholder="e.g. Priya Sharma"
                value={form.name || ""}
                onChange={update("name")}
              />
            </Field>
            <Field label="Email Address" required>
              <input
                type="email"
                className={inputClasses}
                placeholder="e.g. priya@example.com"
                value={form.email || ""}
                onChange={update("email")}
              />
            </Field>
            <Field label="Phone Number" required>
              <input
                className={inputClasses}
                placeholder="+91 98765 43210"
                value={form.phone || ""}
                onChange={update("phone")}
              />
            </Field>
            <Field label="Qualification / Education" required>
              <input
                className={inputClasses}
                placeholder="e.g. B.Ed, M.Sc, B.Tech etc."
                value={form.qualification || ""}
                onChange={update("qualification")}
              />
            </Field>
            <Field label="Current School / Organization">
              <input
                className={inputClasses}
                placeholder="e.g. Delhi Public School"
                value={form.school || ""}
                onChange={update("school")}
              />
            </Field>
            <Field label="Designation" required>
              <select
                className={inputClasses}
                value={form.designation || ""}
                onChange={update("designation")}
              >
                <option value="">Select Designation</option>
                <option>Teacher</option>
                <option>Coordinator</option>
                <option>Principal</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="City">
              <input
                className={inputClasses}
                placeholder="e.g. Jaipur"
                value={form.city || ""}
                onChange={update("city")}
              />
            </Field>
            <Field label="Area of Interest">
              <select
                className={inputClasses}
                value={form.interest || ""}
                onChange={update("interest")}
              >
                <option value="">Select Option</option>
                <option>Robotics & IoT</option>
                <option>AI for Educators</option>
                <option>Coding for Teachers</option>
                <option>STEM & Project-Based Learning</option>
                <option>Emerging Technologies</option>
              </select>
            </Field>
            <Field label="How did you hear about us?" span={2}>
              <input
                className={inputClasses}
                placeholder="e.g. Website, Instagram, Friend, etc."
                value={form.source || ""}
                onChange={update("source")}
              />
            </Field>
            <Field label="Upload Your CV (PDF/DOC)" required>
              <label className={`${inputClasses} flex cursor-pointer items-center gap-3 text-brand-text-muted`}>
                <Upload className="h-4 w-4" />
                Choose File
                <input type="file" className="hidden" />
              </label>
            </Field>
            <Field label="Message (Optional)" span={2}>
              <textarea
                rows={1}
                className={`${inputClasses} sm:col-span-2`}
                placeholder="Anything you'd like to ask or share?"
                value={form.message || ""}
                onChange={update("message")}
              />
            </Field>

            <div className="sm:col-span-2">
              <PrimaryButton type="submit">Get Information</PrimaryButton>
            </div>
          </form>
        </div>

        {/* Gallery */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-brand-bg-dark">
                Snapshots from Our Training Sessions
              </h2>
              <p className="mt-2 text-brand-text-light">
                Real teachers. Real learning. Real impact.
              </p>
            </div>
            <OutlineButton className="hidden shrink-0 border-brand-border text-brand-text-light hover:border-brand-bg-dark sm:inline-flex">
              View Gallery
            </OutlineButton>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Teacher training snapshot ${i + 1}`}
                className={`h-40 w-full rounded-lg object-cover shadow-sm ${
                  i === 0 ? "col-span-2 h-52" : ""
                }`}
              />
            ))}
            <div className="flex h-40 flex-col items-center justify-center rounded-lg bg-brand-bg-dark p-4 text-center">
              <p className="font-display text-lg italic text-white">
                Educators today.
                <br />
                Innovators tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}