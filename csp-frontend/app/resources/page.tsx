"use client";

import Sidebar from "@/components/Sidebar";
import { FolderOpen, Link2, FileText } from "lucide-react";
import { useEffect, useState } from "react";

type Resource = {
  _id: string;
  title: string;
  subject: string;
  type: string;
  link: string;
};

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    fetch("/api/resources")
      .then((res) => res.json())
      .then((data) => setResources(data));
  }, []);

  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10 relative overflow-x-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl"></div>

        <div>
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Learning Resources
          </p>

          <h1 className="text-5xl font-bold mt-3 text-slate-900">
            Resources Hub ✨
          </h1>

          <p className="text-slate-600 mt-4 text-lg">
            All academic resources in one organized place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="glass rounded-3xl p-6 shadow-lg">
            <FolderOpen className="text-blue-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Resource Library
            </h3>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <Link2 className="text-cyan-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Useful Links
            </h3>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <FileText className="text-purple-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Documents
            </h3>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 mt-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Available Resources
          </h2>

          <div className="space-y-4 mt-8">
            {resources.map((resource) => (
              <a
                key={resource._id}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-2xl px-6 py-5 hover:-translate-y-1 transition"
              >
                <h3 className="text-slate-900 font-bold text-lg">
                  {resource.title}
                </h3>

                <p className="text-slate-600 mt-2">
                  {resource.subject} • {resource.type}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}