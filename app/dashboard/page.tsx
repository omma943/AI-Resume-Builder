export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          Welcome to AI Resume Builder
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-700">
            <h2 className="text-xl font-semibold">
              Create Resume
            </h2>

            <p className="mt-2 text-slate-400">
              Start building a new resume.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-700">
            <h2 className="text-xl font-semibold">
              Analyze Resume
            </h2>

            <p className="mt-2 text-slate-400">
              Improve ATS score using AI.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6 border border-slate-700">
            <h2 className="text-xl font-semibold">
              My Resumes
            </h2>

            <p className="mt-2 text-slate-400">
              View your saved resumes.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}