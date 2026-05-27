"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

type Note = {
  _id: string;
  title: string;
  subject: string;
  pdfLink: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  

  const groupedNotes = {
    C: notes.filter((note) => note.subject === "C"),
    DSA: notes.filter((note) => note.subject === "DSA"),
    ADS: notes.filter((note) => note.subject === "ADS"),
  };

  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10">
        <h1 className="text-5xl font-bold text-slate-900 mb-10">
          Study Notes 📘
        </h1>

        {Object.entries(groupedNotes).map(([subject, subjectNotes]) => (
          <div key={subject} className="glass rounded-3xl p-8 mb-10 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              {subject}
            </h2>

            <div className="space-y-4">
              {subjectNotes.length > 0 ? (
                subjectNotes.map((note) => (
                  <div
                    key={note._id}
                    className="glass rounded-2xl px-6 py-5 flex justify-between items-center"
                  >
                    <a
                      href={note.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold"
                    >
                      {note.title}
                    </a>

                    
                  </div>
                ))
              ) : (
                <p className="text-slate-500">
                  No notes uploaded.
                </p>
              )}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}