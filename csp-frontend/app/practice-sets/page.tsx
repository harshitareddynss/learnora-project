"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  useSearchParams,
  useRouter,
} from "next/navigation";
import questions from "@/lib/questions";

export default function PracticeSetsPage() {

  const searchParams =
    useSearchParams();

  const router =
    useRouter();

  const topicNames =
    Object.keys(questions);

  const [selectedTopic,
    setSelectedTopic] =
    useState("Basic C Syntax");

  useEffect(() => {

    const topic =
      searchParams.get("topic") ||
      "Basic C Syntax";

    setSelectedTopic(topic);

  }, [searchParams]);

  const currentQuestions =
    questions[
      selectedTopic as keyof typeof questions
    ] || [];

  return (

    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-100 p-8">

      {/* BACK BUTTON */}
      <div className="mb-6">

        <button
          onClick={() =>
            router.push("/practice")
          }
          className="
            flex items-center gap-2
            px-5 py-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-500 to-cyan-500
            text-white
            font-semibold
            shadow-lg
            hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          Back to Practice
        </button>

      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-8">

        {/* LEFT Topics */}
        <div className="glass rounded-3xl p-6 shadow-xl">

          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Topics
          </h2>

          <div className="space-y-4">

            {topicNames.map((topic) => (

              <button
                key={topic}
                onClick={() =>
                  setSelectedTopic(topic)
                }
                className={`w-full text-left p-4 rounded-2xl transition border font-medium
                ${
                  selectedTopic === topic
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                    : "bg-white border-slate-200 hover:bg-blue-50 text-slate-700"
                }`}
              >
                {topic}
              </button>

            ))}

          </div>
        </div>

        {/* RIGHT Questions */}
        <div className="glass rounded-3xl p-8 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-4xl font-bold text-slate-900">
                {selectedTopic}
              </h1>

              <p className="text-slate-600 mt-2">
                Programming Questions
              </p>

            </div>

            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold">
              {currentQuestions.length} Questions
            </div>

          </div>

          <div className="space-y-5 mt-8">

            {currentQuestions.map(
              (question: any) => (

              <div
                key={question.id}
                className="glass rounded-2xl p-5 flex items-center justify-between hover:-translate-y-1 transition shadow"
              >

                <div>

                  <p className="font-bold text-slate-800">
                    Q{question.id}. {question.title}
                  </p>

                  <p className="text-slate-600 mt-1">
                    {question.statement}
                  </p>

                </div>

                <Link
                  href={`/compiler/${encodeURIComponent(
                    selectedTopic
                  )}/${question.id}`}
                  className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition font-medium"
                >
                  Solve
                </Link>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}