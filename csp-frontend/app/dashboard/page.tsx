import Sidebar from "@/components/Sidebar";
import {
  BookOpen,
  FileText,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10 relative overflow-x-hidden">
        {/* Decorative background */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative z-10">
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Student Workspace
          </p>

          <h1 className="text-5xl font-bold mt-3 text-slate-900">
            Welcome Back 👋
          </h1>

          <p className="text-slate-600 mt-4 text-lg">
            Continue exploring your academic journey with premium learning resources.
          </p>
        </div>

        {/* Top cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative z-10">
          <div className="glass rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <TrendingUp className="text-blue-500 w-8 h-8" />
              <div>
                <p className="text-slate-500">Learning Status</p>
                <h3 className="text-2xl font-bold text-slate-900">Active</h3>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <BookOpen className="text-cyan-500 w-8 h-8" />
              <div>
                <p className="text-slate-500">Available Subjects</p>
                <h3 className="text-2xl font-bold text-slate-900">3</h3>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <Sparkles className="text-purple-500 w-8 h-8" />
              <div>
                <p className="text-slate-500">Access Mode</p>
                <h3 className="text-2xl font-bold text-slate-900">Premium</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Main cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 relative z-10">
          <div className="glass rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Continue Learning
            </h2>

            <p className="text-slate-600 mt-4">
              Resume your latest subject modules and academic exploration.
            </p>

            <div className="mt-8 w-full bg-slate-200 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-4 w-2/5 rounded-full"></div>
            </div>

            <p className="text-blue-600 mt-4 font-medium">
              Structured learning path available
            </p>
          </div>

          <div className="glass rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Quick Resources
            </h2>

            <div className="space-y-4 mt-6">
              {[
                "C Programming Notes",
                "DS Concepts",
                "ADS Reference Materials",
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl px-5 py-4 text-slate-700 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative z-10">
          {[
            {
              title: "Notes",
              desc: "Access academic notes instantly.",
              icon: <FileText className="text-blue-500" />,
            },
            {
              title: "Practice",
              desc: "Strengthen conceptual understanding.",
              icon: <BookOpen className="text-cyan-500" />,
            },
            {
              title: "Resources",
              desc: "Explore uploaded study materials.",
              icon: <Sparkles className="text-purple-500" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-6 shadow-lg"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}