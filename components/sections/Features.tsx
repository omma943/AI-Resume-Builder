import Card from "@/components/ui/Card";

export default function Features() {
  const features = [
    {
      title: "AI Resume Builder",
      description: "Create a professional resume in minutes using AI.",
    },
    {
      title: "ATS Score",
      description: "Check if your resume passes ATS screening.",
    },
    {
      title: "Cover Letter",
      description: "Generate personalized cover letters instantly.",
    },
    {
      title: "Resume Analyzer",
      description: "Get AI suggestions to improve your resume.",
    },
    {
      title: "Multiple Templates",
      description: "Choose from modern and ATS-friendly templates.",
    },
    {
      title: "PDF Export",
      description: "Download your resume as a high-quality PDF.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Powerful Features
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Everything you need to create a job-winning resume.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}