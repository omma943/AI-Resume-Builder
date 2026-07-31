"use client";

import { useResume } from "@/context/ResumeContext";

export default function ResumePreview() {
  const { resumeData } = useResume();

  return (
    <div className="min-h-[700px] rounded-2xl bg-white p-10 text-black">
      <h1 className="text-4xl font-bold">
        {resumeData.fullName || "Your Name"}
      </h1>

      <p className="mt-2 text-gray-500">
        {resumeData.jobTitle || "Software Developer"}
      </p>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold">
        Professional Summary
      </h2>

      <p className="mt-3 text-gray-600">
        This preview will update automatically.
      </p>
    </div>
  );
}