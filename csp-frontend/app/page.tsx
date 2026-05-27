import Link from "next/link";
import {
  Rocket,
  BookOpen,
  FileText,
  PenTool,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-6 relative overflow-hidden">
      {/* Floating Background Decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl"></div>

      {/* Navbar */}
      <nav className="glass rounded-full px-8 py-4 flex justify-between items-center relative z-10 shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900">
          LEARNORA
        </h1>

        <div className="glass rounded-full px-6 py-3 flex gap-8 text-slate-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses/c">Courses</Link>
          <Link href="/dashboard">Notes</Link>
          <Link href="/practice">Practice</Link>
          <Link href="/dashboard">Resources</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href="/login"
            className="text-slate-700 font-medium hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center mt-20 relative z-10">
        {/* Left */}
        <div>
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold mb-5">
            Premium Learning Platform
          </p>

          <h1 className="text-7xl font-bold leading-tight text-slate-900">
            Master C, DS & ADS
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              The Smart Way 🚀
            </span>
          </h1>

          <p className="text-slate-600 text-xl mt-8 max-w-xl leading-relaxed">
            A beautifully crafted learning platform for first-year students to
            explore structured notes, resources, and academic materials.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition"
            >
              Start Learning
            </Link>

            <Link
              href="/courses/c"
              className="glass px-8 py-4 rounded-full font-semibold text-slate-800 hover:scale-105 transition"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative h-[550px]">
          {/* Main floating panel */}
          <div className="glass rounded-3xl p-8 h-full shadow-xl relative overflow-hidden">
            <div className="absolute top-10 right-10 animate-bounce">
              <Rocket className="w-12 h-12 text-blue-500" />
            </div>

            <div className="absolute top-28 left-8 glass rounded-3xl p-5 w-60 shadow-lg">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-blue-500" />
                <div>
                  <p className="text-slate-500 text-sm">Learning Status</p>
                  <h3 className="text-xl font-bold text-slate-900">Active</h3>
                </div>
              </div>
            </div>

            <div className="absolute top-56 right-10 glass rounded-3xl p-5 w-56 shadow-lg">
              <p className="text-slate-500 text-sm">Available Subjects</p>
              <h3 className="text-4xl font-bold text-slate-900 mt-2">3</h3>
              <p className="text-cyan-500 mt-2 font-medium">C • DS • ADS</p>
            </div>

            <div className="absolute bottom-20 left-10 glass rounded-3xl p-6 w-72 shadow-lg">
              <div className="flex items-center gap-3">
                <Sparkles className="text-purple-500" />
                <div>
                  <p className="text-slate-500 text-sm">Smart Learning</p>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Structured academic resources
                  </h3>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-14 w-44 h-44 bg-blue-300/40 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="glass rounded-3xl mt-20 p-8 grid md:grid-cols-4 gap-8 relative z-10 shadow-lg">
        {[
          ["500+", "Students"],
          ["3", "Core Subjects"],
          ["20+", "Resources"],
          ["24/7", "Access"],
        ].map(([num, label], i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl font-bold text-slate-900">{num}</h3>
            <p className="text-slate-500 mt-2">{label}</p>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section className="grid md:grid-cols-4 gap-6 mt-16 relative z-10">
        {[
          {
            icon: <BookOpen className="text-blue-500" />,
            title: "Courses",
            desc: "Explore structured subject modules.",
          },
          {
            icon: <FileText className="text-cyan-500" />,
            title: "Notes",
            desc: "Access beautifully organized resources.",
          },
          {
            icon: <PenTool className="text-purple-500" />,
            title: "Practice",
            desc: "Strengthen understanding through exercises.",
          },
          {
            icon: <Sparkles className="text-pink-500" />,
            title: "Resources",
            desc: "All academic materials in one place.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="glass rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition"
          >
            <div className="mb-5">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-600 mt-3">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}