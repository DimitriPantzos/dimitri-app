"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  XCircle,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";
import { modules } from "../trainingData";

type Phase = "reading" | "quiz";

interface Progress {
  currentModule: number;
  completedModules: number[];
  quizScores: Record<number, number>;
}

export default function TrainingCourse() {
  const router = useRouter();
  const [employee, setEmployee] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);
  const [progress, setProgress] = useState<Progress>({
    currentModule: 0,
    completedModules: [],
    quizScores: {},
  });
  const [phase, setPhase] = useState<Phase>("reading");
  const [contentPage, setContentPage] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("training_employee");
    if (!stored) {
      router.push("/training");
      return;
    }
    setEmployee(JSON.parse(stored));

    const savedProgress = localStorage.getItem("training_progress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [router]);

  const saveProgress = useCallback((p: Progress) => {
    setProgress(p);
    localStorage.setItem("training_progress", JSON.stringify(p));
  }, []);

  const currentModule = modules[progress.currentModule];
  if (!employee || !currentModule) return null;

  const totalModules = modules.length;
  const overallProgress =
    (progress.completedModules.length / totalModules) * 100;

  function handleQuizSubmit() {
    const quiz = currentModule.quiz;
    let correct = 0;
    quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correctIndex) correct++;
    });
    const passed = correct === quiz.length;
    setQuizPassed(passed);
    setQuizSubmitted(true);

    if (passed) {
      const newProgress: Progress = {
        ...progress,
        completedModules: [
          ...new Set([...progress.completedModules, currentModule.id]),
        ],
        quizScores: {
          ...progress.quizScores,
          [currentModule.id]: correct,
        },
      };
      saveProgress(newProgress);
    }
  }

  function handleNextModule() {
    if (progress.currentModule + 1 >= totalModules) {
      // All modules complete
      localStorage.setItem(
        "training_completed",
        JSON.stringify({
          ...employee,
          completedAt: new Date().toISOString(),
          scores: progress.quizScores,
        })
      );
      router.push("/training/certificate");
      return;
    }

    const newProgress = {
      ...progress,
      currentModule: progress.currentModule + 1,
    };
    saveProgress(newProgress);
    setPhase("reading");
    setContentPage(0);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizPassed(false);
  }

  function handleRetryQuiz() {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizPassed(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12">
      <div className="max-w-3xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/60">
              Module {progress.currentModule + 1} of {totalModules}
            </p>
            <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/60">
              {employee.firstName} {employee.lastName}
            </p>
          </div>
          <div className="w-full h-2 bg-[#2d2d2d]/10 border border-[#2d2d2d]/20">
            <div
              className="h-full bg-[#2d2d2d] transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="flex gap-2 mt-3">
            {modules.map((m, i) => (
              <div
                key={m.id}
                className={`flex-1 h-1 ${
                  progress.completedModules.includes(m.id)
                    ? "bg-green-700"
                    : i === progress.currentModule
                    ? "bg-[#2d2d2d]"
                    : "bg-[#2d2d2d]/15"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="border-2 border-[#2d2d2d] bg-[#f5f1e8]">
          {/* Module Header */}
          <div className="border-b border-[#2d2d2d] p-6 md:p-8 flex items-center gap-3">
            {phase === "reading" ? (
              <BookOpen size={20} className="text-[#2d2d2d]/60" />
            ) : (
              <ClipboardCheck size={20} className="text-[#2d2d2d]/60" />
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50">
                {phase === "reading" ? "Course Material" : "Knowledge Assessment"}
              </p>
              <h1 className="text-xl md:text-2xl font-light tracking-tight uppercase text-[#2d2d2d]">
                {currentModule.title}
              </h1>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8">
            {phase === "reading" && (
              <>
                <div className="prose prose-sm max-w-none">
                  <div
                    className="text-sm leading-relaxed text-[#2d2d2d]/80 whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: currentModule.content[contentPage]
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-[#2d2d2d]">$1</strong>'
                        )
                        .replace(/\n/g, "<br />"),
                    }}
                  />
                </div>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#2d2d2d]/10">
                  <button
                    onClick={() => setContentPage((p) => Math.max(0, p - 1))}
                    disabled={contentPage === 0}
                    className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2d2d2d] disabled:opacity-30 hover:opacity-70 transition-opacity"
                  >
                    <ChevronLeft size={14} />
                    Previous
                  </button>

                  <p className="text-xs text-[#2d2d2d]/40">
                    Page {contentPage + 1} of {currentModule.content.length}
                  </p>

                  {contentPage < currentModule.content.length - 1 ? (
                    <button
                      onClick={() => setContentPage((p) => p + 1)}
                      className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2d2d2d] hover:opacity-70 transition-opacity"
                    >
                      Next
                      <ChevronRight size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setPhase("quiz")}
                      className="flex items-center gap-2 text-xs uppercase tracking-wider bg-[#2d2d2d] text-[#f5f1e8] px-4 py-2 hover:bg-[#2d2d2d]/80 transition-colors"
                    >
                      Take Assessment
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </>
            )}

            {phase === "quiz" && (
              <>
                <div className="space-y-8">
                  {currentModule.quiz.map((q, qIndex) => (
                    <div key={qIndex}>
                      <p className="text-sm font-medium text-[#2d2d2d] mb-3">
                        {qIndex + 1}. {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((opt, oIndex) => {
                          const selected = quizAnswers[qIndex] === oIndex;
                          const isCorrect = q.correctIndex === oIndex;
                          let borderClass =
                            "border-[#2d2d2d]/20 hover:border-[#2d2d2d]/50";
                          if (selected && !quizSubmitted) {
                            borderClass = "border-[#2d2d2d] bg-[#2d2d2d]/5";
                          }
                          if (quizSubmitted) {
                            if (isCorrect) {
                              borderClass =
                                "border-green-700 bg-green-50";
                            } else if (selected && !isCorrect) {
                              borderClass =
                                "border-red-600 bg-red-50";
                            }
                          }

                          return (
                            <button
                              key={oIndex}
                              onClick={() => {
                                if (!quizSubmitted) {
                                  setQuizAnswers((prev) => ({
                                    ...prev,
                                    [qIndex]: oIndex,
                                  }));
                                }
                              }}
                              disabled={quizSubmitted}
                              className={`w-full text-left border px-4 py-3 text-sm text-[#2d2d2d] transition-colors ${borderClass} disabled:cursor-default`}
                            >
                              <span className="flex items-center gap-2">
                                {quizSubmitted && isCorrect && (
                                  <CheckCircle
                                    size={16}
                                    className="text-green-700 flex-shrink-0"
                                  />
                                )}
                                {quizSubmitted &&
                                  selected &&
                                  !isCorrect && (
                                    <XCircle
                                      size={16}
                                      className="text-red-600 flex-shrink-0"
                                    />
                                  )}
                                {opt}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#2d2d2d]/10">
                  {!quizSubmitted && (
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          setPhase("reading");
                          setContentPage(0);
                        }}
                        className="text-xs uppercase tracking-wider text-[#2d2d2d]/60 hover:text-[#2d2d2d] transition-colors"
                      >
                        Review Material
                      </button>
                      <button
                        onClick={handleQuizSubmit}
                        disabled={
                          Object.keys(quizAnswers).length !==
                          currentModule.quiz.length
                        }
                        className="bg-[#2d2d2d] text-[#f5f1e8] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#2d2d2d]/80 transition-colors disabled:opacity-30"
                      >
                        Submit Answers
                      </button>
                    </div>
                  )}

                  {quizSubmitted && quizPassed && (
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-2 text-green-700">
                        <CheckCircle size={20} />
                        <p className="text-sm font-medium">
                          Module Passed — All answers correct!
                        </p>
                      </div>
                      <button
                        onClick={handleNextModule}
                        className="bg-[#2d2d2d] text-[#f5f1e8] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#2d2d2d]/80 transition-colors"
                      >
                        {progress.currentModule + 1 >= totalModules
                          ? "Complete Training & Get Certificate"
                          : "Continue to Next Module"}
                      </button>
                    </div>
                  )}

                  {quizSubmitted && !quizPassed && (
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-2 text-red-600">
                        <XCircle size={20} />
                        <p className="text-sm font-medium">
                          Not all answers were correct. Please review the
                          material and try again.
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <button
                          onClick={() => {
                            setPhase("reading");
                            setContentPage(0);
                            setQuizAnswers({});
                            setQuizSubmitted(false);
                          }}
                          className="border border-[#2d2d2d] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#2d2d2d] hover:text-[#f5f1e8] transition-colors"
                        >
                          Review Material
                        </button>
                        <button
                          onClick={handleRetryQuiz}
                          className="bg-[#2d2d2d] text-[#f5f1e8] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#2d2d2d]/80 transition-colors"
                        >
                          Retry Assessment
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
