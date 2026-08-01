"use client";

import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceForm() {
  const [experienceList, setExperienceList] = useState([1]);

  const addExperience = () => {
    setExperienceList((prev) => [...prev, Date.now()]);
  };

  const deleteExperience = (id: number) => {
    setExperienceList((prev) =>
      prev.filter((item) => item !== id)
    );
  };

  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">
        Experience
      </h2>

      <div className="mt-6 space-y-6">
        {experienceList.map((id, index) => (
          <ExperienceCard
            key={id}
            index={index}
            onDelete={() => deleteExperience(id)}
          />
        ))}
      </div>

      <button
        onClick={addExperience}
        className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        + Add Experience
      </button>
    </section>
  );
}