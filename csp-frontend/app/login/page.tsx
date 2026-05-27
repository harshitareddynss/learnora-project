"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl"></div>

      <div className="glass rounded-3xl p-10 w-full max-w-md shadow-xl relative z-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Welcome Back 👋
        </h1>

        <p className="text-slate-600 mt-3">
          Login to continue your learning journey.
        </p>

        <form onSubmit={handleLogin} className="space-y-5 mt-8">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full premium-input rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full premium-input rounded-2xl px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="w-full premium-btn py-4 rounded-2xl font-semibold transition"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="text-center mt-5 text-blue-600 font-medium">
            {message}
          </p>
        )}

        <p className="text-slate-600 mt-6 text-center">
          New here?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold">
            Create account
          </Link>
        </p>
      </div>
    </main>
  );
}