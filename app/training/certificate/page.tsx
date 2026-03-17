"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Award, Printer, ArrowLeft } from "lucide-react";

interface CompletionData {
  firstName: string;
  lastName: string;
  completedAt: string;
  startedAt?: string;
}

export default function TrainingCertificate() {
  const router = useRouter();
  const [data, setData] = useState<CompletionData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("training_completed");
    if (!stored) {
      router.push("/training");
      return;
    }
    setData(JSON.parse(stored));
  }, [router]);

  if (!data) return null;

  const completionDate = new Date(data.completedAt);
  const formattedDate = completionDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const certId = `LH-${completionDate.getFullYear()}-${String(
    completionDate.getMonth() + 1
  ).padStart(2, "0")}${String(completionDate.getDate()).padStart(
    2,
    "0"
  )}-${data.firstName[0].toUpperCase()}${data.lastName[0].toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase()}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Print button - hidden when printing */}
      <div className="print:hidden mb-6 flex gap-4">
        <button
          onClick={() => router.push("/training")}
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2d2d2d]/60 hover:text-[#2d2d2d] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Training
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-[#2d2d2d] text-[#f5f1e8] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#2d2d2d]/80 transition-colors"
        >
          <Printer size={14} />
          Print Certificate
        </button>
      </div>

      {/* Certificate */}
      <div className="max-w-2xl w-full">
        <div className="border-4 border-[#2d2d2d] p-2">
          <div className="border-2 border-[#2d2d2d] p-12 md:p-16 bg-[#f5f1e8] text-center">
            {/* Top Emblem */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-2 border-[#2d2d2d] rounded-full flex items-center justify-center">
                <Award size={28} className="text-[#2d2d2d]" />
              </div>
            </div>

            {/* Title */}
            <p className="text-xs uppercase tracking-[0.3em] text-[#2d2d2d]/50 mb-2">
              Lyfe Hospitality
            </p>
            <h1 className="text-2xl md:text-3xl font-light uppercase tracking-wider text-[#2d2d2d] mb-1">
              Certificate of Completion
            </h1>
            <div className="w-24 h-px bg-[#2d2d2d]/30 mx-auto my-6" />

            {/* Body */}
            <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50 mb-4">
              This certifies that
            </p>
            <p className="text-3xl md:text-4xl font-light text-[#2d2d2d] mb-6 tracking-tight">
              {data.firstName} {data.lastName}
            </p>

            <p className="text-sm text-[#2d2d2d]/70 leading-relaxed max-w-md mx-auto mb-8">
              has successfully completed the Connecticut State Mandated Sexual
              Harassment Prevention Training program as required by Connecticut
              Public Act 19-16 (Conn. Gen. Stat. §46a-54(15)(B)).
            </p>

            {/* Course Details */}
            <div className="border-t border-b border-[#2d2d2d]/15 py-6 mb-8 space-y-2">
              <p className="text-xs text-[#2d2d2d]/50 uppercase tracking-wider">
                Training Modules Completed
              </p>
              <div className="text-xs text-[#2d2d2d]/70 space-y-1">
                <p>1. Understanding Sexual Harassment</p>
                <p>2. Recognizing Harassment in Hospitality Settings</p>
                <p>3. Employer & Employee Responsibilities</p>
                <p>4. Reporting Procedures & Legal Remedies</p>
                <p>5. Bystander Intervention & Prevention Strategies</p>
              </div>
            </div>

            {/* Date and signature */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="border-b border-[#2d2d2d]/30 pb-2 mb-2">
                  <p className="text-sm text-[#2d2d2d]">{formattedDate}</p>
                </div>
                <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50">
                  Date of Completion
                </p>
              </div>
              <div>
                <div className="border-b border-[#2d2d2d]/30 pb-2 mb-2">
                  <p className="text-sm text-[#2d2d2d] italic">
                    Lyfe Hospitality Management
                  </p>
                </div>
                <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50">
                  Authorized By
                </p>
              </div>
            </div>

            {/* Certificate ID */}
            <p className="text-[10px] text-[#2d2d2d]/30 uppercase tracking-wider">
              Certificate ID: {certId}
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer - hidden when printing */}
      <div className="print:hidden max-w-2xl w-full mt-6">
        <p className="text-xs text-[#2d2d2d]/40 text-center leading-relaxed">
          This certificate confirms completion of the Lyfe Hospitality sexual
          harassment prevention training program. Employees should retain a copy
          for their records. Employers are required to maintain training records
          per Connecticut state law.
        </p>
      </div>
    </main>
  );
}
