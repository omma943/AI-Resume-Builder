"use client";

import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import ResumePreview from "@/components/resume/ResumePreview";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-8">
        <h1 className="text-5xl font-bold">
          AI Resume Builder
        </h1>

        <p className="mt-3 text-slate-400">
          Build your ATS-friendly resume.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Left Side */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <PersonalInfoForm />
          </section>

          {/* Right Side */}
          <ResumePreview />
        </div>
      </div>
    </main>
  );
}