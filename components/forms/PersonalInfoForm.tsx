"use client";

import { useResume } from "@/context/ResumeContext";

export default function PersonalInfoForm() {
  const { resumeData, updateResumeData } = useResume();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">
        Personal Information
      </h2>

      {/* Full Name */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Full Name
        </label>

        <input
          type="text"
          value={resumeData.fullName}
          onChange={(e) =>
            updateResumeData({
              fullName: e.target.value,
            })
          }
          placeholder="Enter your full name"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Job Title */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Job Title
        </label>

        <input
          type="text"
          value={resumeData.jobTitle}
          onChange={(e) =>
            updateResumeData({
              jobTitle: e.target.value,
            })
          }
          placeholder="Software Engineer"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}