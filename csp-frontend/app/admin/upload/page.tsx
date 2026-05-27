"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    pdfLink: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10">
        <div className="glass rounded-3xl p-10 shadow-xl max-w-2xl">
          <h1 className="text-4xl font-bold text-slate-900">
            Upload Notes 📘
          </h1>

          <form onSubmit={handleUpload} className="space-y-5 mt-8">
            <input
              type="text"
              name="title"
              placeholder="Note Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full premium-input rounded-2xl px-5 py-4"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full premium-input rounded-2xl px-5 py-4"
            >
              <option value="">Select Subject</option>
              <option value="C">C Programming</option>
              <option value="DSA">DSA</option>
              <option value="ADS">ADS</option>
            </select>

            <input
              type="text"
              name="pdfLink"
              placeholder="Google Drive PDF Link"
              value={formData.pdfLink}
              onChange={handleChange}
              className="w-full premium-input rounded-2xl px-5 py-4"
            />

            <button
              type="submit"
              className="w-full premium-btn py-4 rounded-2xl font-semibold"
            >
              Upload Notes
            </button>
          </form>

          {message && (
            <p className="text-center mt-5 text-blue-600 font-medium">
              {message}
            </p>
          )}
        </div>
      </main>
    </>
  );
}