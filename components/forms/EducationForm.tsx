"use client";

import { useState } from "react";
import EducationCard from "./EducationCard";

export default function EducationForm() {
  const [educationList, setEducationList] = useState([1]);

  const addEducation = () => {
    setEducationList((prev) => [...prev, Date.now()]);
  };

  const deleteEducation = (id: number) => {
    setEducationList((prev) => prev.filter((item) => item !== id));
  };

  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">
        Education
      </h2>

      <div className="mt-6 space-y-6">
        {educationList.map((id, index) => (
          <EducationCard
            key={id}
            index={index}
            onDelete={() => deleteEducation(id)}
          />
        ))}
      </div>

      <button
        onClick={addEducation}
        className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        + Add Education
      </button>
    </section>
  );
}