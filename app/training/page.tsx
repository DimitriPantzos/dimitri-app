"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default function TrainingSignIn() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedFirst = firstName.trim();
    const trimmedLast = lastName.trim();
    if (!trimmedFirst || !trimmedLast) {
      setError("Please enter your full name.");
      return;
    }
    // Store employee info in localStorage
    localStorage.setItem(
      "training_employee",
      JSON.stringify({
        firstName: trimmedFirst,
        lastName: trimmedLast,
        startedAt: new Date().toISOString(),
      })
    );
    // Clear any previous progress
    localStorage.removeItem("training_progress");
    router.push("/training/course");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-lg w-full">
        <div className="border-2 border-[#2d2d2d] p-12 md:p-16 bg-[#f5f1e8]">
          {/* Header */}
          <div className="border-b border-[#2d2d2d] pb-6 mb-8 flex items-center gap-3">
            <ShieldCheck size={24} className="text-[#2d2d2d]" />
            <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/60">
              Lyfe Hospitality / Employee Training
            </p>
          </div>

          <h1 className="text-2xl md:text-3xl font-light mb-2 tracking-tight uppercase text-[#2d2d2d]">
            Sexual Harassment Prevention Training
          </h1>

          <p className="text-sm text-[#2d2d2d]/70 mb-2">
            Connecticut State Mandated Training
          </p>
          <p className="text-xs text-[#2d2d2d]/50 mb-8 leading-relaxed">
            Per Connecticut Public Act 19-16, all employees must complete a
            minimum of two hours of sexual harassment prevention training. This
            course fulfills that requirement. Please enter your name below to
            begin.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs uppercase tracking-wider text-[#2d2d2d]/60 mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setError("");
                }}
                className="w-full border border-[#2d2d2d]/30 bg-white/50 px-4 py-3 text-sm text-[#2d2d2d] placeholder:text-[#2d2d2d]/30 focus:outline-none focus:border-[#2d2d2d] transition-colors"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-xs uppercase tracking-wider text-[#2d2d2d]/60 mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setError("");
                }}
                className="w-full border border-[#2d2d2d]/30 bg-white/50 px-4 py-3 text-sm text-[#2d2d2d] placeholder:text-[#2d2d2d]/30 focus:outline-none focus:border-[#2d2d2d] transition-colors"
                placeholder="Enter your last name"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              className="w-full border-2 border-[#2d2d2d] bg-[#2d2d2d] text-[#f5f1e8] py-3 text-sm uppercase tracking-wider hover:bg-transparent hover:text-[#2d2d2d] transition-colors"
            >
              Begin Training
            </button>
          </form>

          <div className="border-t border-[#2d2d2d]/20 mt-8 pt-6">
            <p className="text-xs text-[#2d2d2d]/40 leading-relaxed">
              This training consists of 5 modules covering: understanding sexual
              harassment, recognizing harassment in hospitality, employer &
              employee responsibilities, reporting procedures, and bystander
              intervention. A certificate of completion will be issued upon
              passing all module assessments.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
