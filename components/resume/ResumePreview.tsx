"use client";

import { useResume } from "@/context/ResumeContext";

export default function ResumePreview() {
  const { resumeData } = useResume();

  return (
    <div className="min-h-[900px] rounded-2xl bg-white p-10 text-black shadow-xl">

      {/* Header */}
      <h1 className="text-4xl font-bold">
        {resumeData.fullName || "Your Name"}
      </h1>

      <p className="mt-2 text-lg text-gray-600">
        {resumeData.jobTitle || "Software Developer"}
      </p>

      <div className="mt-6 space-y-2 text-sm text-gray-700">
        {resumeData.email && <p>📧 {resumeData.email}</p>}
        {resumeData.phone && <p>📱 {resumeData.phone}</p>}
        {resumeData.location && <p>📍 {resumeData.location}</p>}
        {resumeData.linkedin && <p>🌐 {resumeData.linkedin}</p>}
        {resumeData.github && <p>💻 {resumeData.github}</p>}
      </div>

      {/* Summary */}
      <hr className="my-6" />

      <h2 className="text-xl font-bold">
        Professional Summary
      </h2>

      <p className="mt-3 text-gray-700">
        {resumeData.summary ||
          "Write your professional summary..."}
      </p>

      {/* Skills */}
      <hr className="my-6" />

      <h2 className="text-xl font-bold">
        Skills
      </h2>

      <div className="mt-4 flex flex-wrap gap-3">
        {resumeData.skills.length > 0 ? (
          resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm text-white"
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-gray-500">
            No skills added yet.
          </p>
        )}
      </div>
    </div>
  );
}