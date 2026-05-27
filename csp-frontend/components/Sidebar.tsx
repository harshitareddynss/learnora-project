"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  PenTool,
  User,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const [showCourses, setShowCourses] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      href: "/dashboard",
    },
    {
      name: "Notes",
      icon: <FileText size={18} />,
      href: "/notes",
    },
    {
      name: "Resources",
      icon: <BookOpen size={18} />,
      href: "/resources",
    },
    {
      name: "Practice",
      icon: <PenTool size={18} />,
      href: "/practice",
    },
    {
      name: "Profile",
      icon: <User size={18} />,
      href: "/profile",
    },
  ];

  return (
    <aside className="w-[260px] h-screen fixed left-0 top-0 glass border-r border-white/40 p-5 flex flex-col z-50 overflow-y-auto">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          CSP Hub
        </h1>

        <p className="text-slate-500 text-sm mt-1">
          Smart Learning Platform
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {/* Dashboard */}
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-700 hover:bg-white/60 hover:text-blue-600 transition"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        {/* Courses expandable */}
        <button
          onClick={() => setShowCourses(!showCourses)}
          className="flex items-center justify-between px-4 py-3 rounded-2xl text-slate-700 hover:bg-white/60 hover:text-blue-600 transition"
        >
          <div className="flex items-center gap-3">
            <BookOpen size={18} />
            Courses
          </div>

          {showCourses ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
        </button>

        {showCourses && (
          <div className="ml-6 flex flex-col gap-2">
            <Link
              href="/courses/c"
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-white/60 hover:text-blue-600 transition"
            >
              C Programming
            </Link>

            <Link
              href="/courses/dsa"
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-white/60 hover:text-blue-600 transition"
            >
              DSA
            </Link>

            <Link
              href="/courses/ads"
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-white/60 hover:text-blue-600 transition"
            >
              ADS
            </Link>
          </div>
        )}

        {/* Remaining menu */}
        {menuItems.slice(1).map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-700 hover:bg-white/60 hover:text-blue-600 transition"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto pt-6 border-t border-white/40">
        <div className="glass rounded-2xl p-4 mb-4">
          <p className="text-slate-500 text-sm">Logged in as</p>
          <h3 className="text-slate-900 font-semibold mt-1">
            CSP Student
          </h3>
        </div>

        <button
          onClick={async () => {
            await fetch("/api/auth/logout", {
              method: "POST",
            });

            router.push("/login");
          }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition"
        >
          <LogOut size={18} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}