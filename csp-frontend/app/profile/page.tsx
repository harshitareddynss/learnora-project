import Sidebar from "@/components/Sidebar";
import {
  User,
  Mail,
  Shield,
  BookOpen,
  Trophy,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <Sidebar />

      <main className="ml-[260px] min-h-screen p-10 relative overflow-x-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative z-10">
          <p className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Account Profile
          </p>

          <h1 className="text-5xl font-bold mt-3 text-slate-900">
            Student Profile 👤
          </h1>

          <p className="text-slate-600 mt-4 text-lg">
            Manage your account details and learning information.
          </p>
        </div>

        {/* Profile cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="glass rounded-3xl p-6 shadow-lg">
            <User className="text-blue-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Full Name
            </h3>
            <p className="text-slate-600 mt-2">CSP Student</p>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <Mail className="text-cyan-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Email
            </h3>
            <p className="text-slate-600 mt-2">student@example.com</p>
          </div>

          <div className="glass rounded-3xl p-6 shadow-lg">
            <Shield className="text-purple-500 w-8 h-8" />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Account Status
            </h3>
            <p className="text-green-600 mt-2 font-medium">Active</p>
          </div>
        </div>

        {/* Learning stats */}
        <div className="glass rounded-3xl p-8 mt-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Learning Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="glass rounded-2xl p-6">
              <BookOpen className="text-blue-500 w-8 h-8" />
              <h3 className="text-xl font-bold mt-4 text-slate-900">
                Courses Enrolled
              </h3>
              <p className="text-slate-600 mt-2">3 Subjects</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <Trophy className="text-yellow-500 w-8 h-8" />
              <h3 className="text-xl font-bold mt-4 text-slate-900">
                Progress
              </h3>
              <p className="text-slate-600 mt-2">35% Completed</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}