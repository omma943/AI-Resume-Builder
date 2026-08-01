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

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <input
          type="email"
          value={resumeData.email}
          onChange={(e) =>
            updateResumeData({
              email: e.target.value,
            })
          }
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Phone
        </label>

        <input
          type="tel"
          value={resumeData.phone}
          onChange={(e) =>
            updateResumeData({
              phone: e.target.value,
            })
          }
          placeholder="+91 9876543210"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Location */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Location
        </label>

        <input
          type="text"
          value={resumeData.location}
          onChange={(e) =>
            updateResumeData({
              location: e.target.value,
            })
          }
          placeholder="Pune, Maharashtra"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* LinkedIn */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          LinkedIn
        </label>

        <input
          type="text"
          value={resumeData.linkedin}
          onChange={(e) =>
            updateResumeData({
              linkedin: e.target.value,
            })
          }
          placeholder="linkedin.com/in/yourname"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* GitHub */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          GitHub
        </label>

        <input
          type="text"
          value={resumeData.github}
          onChange={(e) =>
            updateResumeData({
              github: e.target.value,
            })
          }
          placeholder="github.com/yourusername"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}