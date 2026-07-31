import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
            🚀 AI Powered Resume Builder
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Build ATS-Friendly
            <br />
            Resumes with AI
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            Create beautiful resumes, improve your ATS score,
            generate cover letters, and land your dream job.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Watch Demo</Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

            <h2 className="text-2xl font-bold">
              Resume Score
            </h2>

            <div className="mt-8 text-center">
              <p className="text-7xl font-bold text-green-400">
                92%
              </p>

              <p className="mt-2 text-slate-400">
                ATS Compatibility
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex justify-between">
                <span>Keywords</span>
                <span className="text-green-400">✔ Excellent</span>
              </div>

              <div className="flex justify-between">
                <span>Formatting</span>
                <span className="text-green-400">✔ Good</span>
              </div>

              <div className="flex justify-between">
                <span>Grammar</span>
                <span className="text-green-400">✔ Perfect</span>
              </div>

              <div className="flex justify-between">
                <span>Skills</span>
                <span className="text-yellow-400">Improve</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}