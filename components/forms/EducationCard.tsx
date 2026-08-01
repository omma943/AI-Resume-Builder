"use client";

type EducationCardProps = {
  index: number;
  onDelete: () => void;
};

export default function EducationCard({
  index,
  onDelete,
}: EducationCardProps) {
  return (
    <div className="relative space-y-4 rounded-xl border border-slate-700 bg-slate-800 p-5">

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Education {index + 1}
        </h3>

        <button
          onClick={onDelete}
          className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>

      <input
        type="text"
        placeholder="College Name"
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
      />

      <input
        type="text"
        placeholder="Degree"
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
      />

      <input
        type="text"
        placeholder="Field of Study"
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Start Year"
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
        />

        <input
          type="text"
          placeholder="End Year"
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
        />
      </div>

      <input
        type="text"
        placeholder="CGPA"
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
      />
    </div>
  );
}