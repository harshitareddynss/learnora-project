"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { PenTool, Code2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PracticePage() {
  const router = useRouter();

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
        {/* Background blur */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl"></div>

        {/* Heading */}
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

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 relative z-10">

          {/* Card 1 - Practice Sets */}
          <Link
            href="/practice-sets"
            className="glass rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition block cursor-pointer"
          >
            <PenTool className="text-blue-500 w-8 h-8" />

            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Practice Sets
            </h3>

            <p className="text-slate-600 mt-2">
              Curated exercises for better understanding.
            </p>
          </Link>

          {/* Card 2 - Concept Reinforcement */}
          <Link href="/concepts">
            <div className="bg-white/50 rounded-3xl p-8 shadow-lg hover:scale-105 transition cursor-pointer">
              <PenTool
                className="text-purple-500 mb-4"
                size={34}
              />

              <h3 className="text-xl font-bold mt-4 text-slate-900">
                Concept Reinforcement
              </h3>

              <p className="text-gray-600">
                Improve logic and analytical thinking.
              </p>
            </div>
          </Link>

          {/* Card 3 - Coding Focus */}
          <div
            onClick={() => router.push("/code-editor")}
            className="glass rounded-3xl p-6 shadow-lg cursor-pointer hover:scale-105 transition"
          >
            <Code2 className="text-cyan-500 w-8 h-8" />

            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Coding Focus
            </h3>

            <p className="text-slate-600 mt-2">
              Strengthen programming confidence.
            </p>
          </div>
        </div>

        
      </main>
    </>
  );
}