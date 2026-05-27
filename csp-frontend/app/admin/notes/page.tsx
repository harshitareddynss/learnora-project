"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

type Note = {
  _id: string;
  title: string;
  subject: string;
  pdfLink: string;
};

export default function AdminNotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (id: string) => {
    await fetch("/api/notes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchNotes();
  };

  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10">
        <h1 className="text-5xl font-bold text-slate-900 mb-10">
          Manage Notes 🛠️
        </h1>

        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note._id}
              className="glass rounded-2xl px-6 py-5 flex justify-between items-center"
            >
              <div>
                <h3 className="text-slate-900 font-semibold">
                  {note.title}
                </h3>

                <p className="text-slate-500 mt-1">
                  {note.subject}
                </p>
              </div>

              <button
                onClick={() => deleteNote(note._id)}
                className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}