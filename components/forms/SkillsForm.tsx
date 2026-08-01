"use client";

import { useState } from "react";
import { useResume } from "@/context/ResumeContext";

export default function SkillsForm() {
  const { resumeData, updateResumeData } = useResume();
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;

    updateResumeData({
      skills: [...resumeData.skills, skill],
    });

    setSkill("");
  };

  const removeSkill = (index: number) => {
    updateResumeData({
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">
        Skills
      </h2>

      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter a skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
        />

        <button
          onClick={addSkill}
          className="rounded-lg bg-blue-600 px-6 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {resumeData.skills.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white"
          >
            {item}

            <button
              onClick={() => removeSkill(index)}
              className="font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}