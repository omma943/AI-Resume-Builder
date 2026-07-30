export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 text-white border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">
          ResumeAI
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
          Login
        </button>
      </div>
    </nav>
  );
}