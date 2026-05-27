import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import {
  Code,
  BookOpen,
  FileText,
  ChevronRight,
} from "lucide-react";

export default function CCoursePage() {
  const modules = [
    "Introduction to C",
    "Variables & Data Types",
    "Operators",
    "Conditional Statements",
    "Loops",
    "Functions",
    "Arrays",
    "Pointers",
  ];

  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10 relative overflow-x-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            C Programming
          </p>

          <h1 className="text-5xl font-bold mt-3 text-slate-900">
            Learn Advanced Data Structures
          </h1>

          <p className="text-slate-600 mt-4 text-lg">
            Explore structured modules and learning resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10 relative z-10">
          <div className="glass rounded-3xl p-6 shadow-lg">
            <Code className="text-blue-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Coding Concepts
            </h3>
            <p className="text-slate-600 mt-2">
              Build strong programming fundamentals.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <BookOpen className="text-cyan-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Course Notes
            </h3>
            <p className="text-slate-600 mt-2">
              Access well-organized study notes.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <FileText className="text-purple-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Resources
            </h3>
            <p className="text-slate-600 mt-2">
              PDFs, references and materials.
            </p>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 mt-10 shadow-xl relative z-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Course Modules
          </h2>

          <div className="space-y-4 mt-8">
            {modules.map((module, i) => (
              <Link
                key={i}
                href="#"
                className="glass rounded-2xl px-6 py-5 flex justify-between items-center hover:-translate-y-1 transition"
              >
                <span className="text-slate-800 font-medium">{module}</span>
                <ChevronRight className="text-blue-500" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}