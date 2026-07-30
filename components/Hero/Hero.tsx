export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold">
          Build an ATS-Friendly Resume with AI
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          Create professional resumes, analyze ATS scores, and generate cover letters.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
}