import Sidebar from "@/components/Sidebar";
import { PenTool, Brain, Code2 } from "lucide-react";

export default function PracticePage() {
  const exercises = [
    "Basic C Syntax Practice",
    "Loops & Conditions Exercises",
    "Functions Problem Set",
    "Arrays Practice",
    "Pointer Challenges",
    "DSA Warm-up Problems",
  ];

  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10 relative overflow-x-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Practice Arena
          </p>

          <h1 className="text-5xl font-bold mt-3 text-slate-900">
            Sharpen Your Skills ✨
          </h1>

          <p className="text-slate-600 mt-4 text-lg">
            Strengthen concepts through structured academic exercises.
          </p>
        </div>

        {/* Top cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 relative z-10">
          <div className="glass rounded-3xl p-6 shadow-lg">
            <PenTool className="text-blue-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Practice Sets
            </h3>
            <p className="text-slate-600 mt-2">
              Curated exercises for better understanding.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <Brain className="text-purple-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Concept Reinforcement
            </h3>
            <p className="text-slate-600 mt-2">
              Improve logic and analytical thinking.
            </p>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <Code2 className="text-cyan-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Coding Focus
            </h3>
            <p className="text-slate-600 mt-2">
              Strengthen programming confidence.
            </p>
          </div>
        </div>

        {/* Practice list */}
        <div className="glass rounded-3xl p-8 mt-10 shadow-xl relative z-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Available Exercises
          </h2>

          <div className="space-y-4 mt-8">
            {exercises.map((exercise, i) => (
              <div
                key={i}
                className="glass rounded-2xl px-6 py-5 text-slate-800 font-medium hover:-translate-y-1 transition"
              >
                {exercise}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}