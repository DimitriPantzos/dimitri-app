"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { Upload, X, Sparkles } from "lucide-react";
import { BUILTIN_PAGES, ColoringPage, svgToDataUrl } from "./pages";
import ColoringStudio from "./ColoringStudio";

const STORAGE_KEY = "eveanna_coloring_uploads";

export default function ColoringBook() {
  const [page, setPage] = useState<ColoringPage | null>(null);
  const [uploads, setUploads] = useState<ColoringPage[]>([]);
  const [notice, setNotice] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // Load saved uploads from the browser.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUploads(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (next: ColoringPage[]) => {
    setUploads(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      setNotice("Saved for now — your browser is full, so this page won't stick around after you close it.");
    }
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const incoming = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (incoming.length === 0) {
      setNotice("Please pick an image file (PNG or JPG).");
      return;
    }
    let remaining = incoming.length;
    const added: ColoringPage[] = [];
    incoming.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        added.push({
          id: `up-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name.replace(/\.[^.]+$/, "").slice(0, 28) || "My page",
          emoji: "🖼️",
          src: reader.result as string,
          uploaded: true,
        });
        remaining -= 1;
        if (remaining === 0) {
          persist([...added, ...uploads]);
          setNotice("");
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeUpload = (id: string) => {
    persist(uploads.filter((u) => u.id !== id));
  };

  if (page) {
    return <ColoringStudio page={page} onBack={() => setPage(null)} />;
  }

  return (
    <main className="min-h-screen px-5 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#2d2d2d] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#e8402a]" />
            A coloring book just for you
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Eveanna&apos;s{" "}
            <span className="text-[#e8402a]">Coloring Book</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#2d2d2d]/60 md:text-base">
            Pick a picture to color in. Tap the paint bucket and a color, then tap
            any part of the drawing to fill it. You can add your own pictures too!
          </p>
        </header>

        {notice && (
          <p className="mx-auto mb-6 max-w-xl rounded-2xl border-2 border-[#e8402a]/40 bg-[#e8402a]/10 px-4 py-3 text-center text-sm text-[#a32a18]">
            {notice}
          </p>
        )}

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {/* Upload tile */}
          <button
            onClick={() => fileRef.current?.click()}
            className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border-4 border-dashed border-[#2d2d2d]/30 bg-white/60 p-4 text-center transition-colors hover:border-[#e8402a] hover:bg-white"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#2d2d2d] bg-white transition-colors group-hover:bg-[#e8402a] group-hover:text-white">
              <Upload size={24} />
            </span>
            <span className="text-sm font-bold uppercase tracking-wide">
              Add your own
            </span>
            <span className="text-[11px] leading-snug text-[#2d2d2d]/50">
              Upload a coloring page (PNG or JPG)
            </span>
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = "";
            }}
          />

          {/* Uploaded pages */}
          {uploads.map((p) => (
            <div key={p.id} className="group relative">
              <button
                onClick={() => setPage(p)}
                className="block w-full overflow-hidden rounded-3xl border-4 border-[#2d2d2d] bg-white shadow-[5px_5px_0_0_#2d2d2d] transition-transform hover:-translate-y-1"
              >
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img
                    src={p.src}
                    alt={p.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="truncate border-t-2 border-[#2d2d2d] px-3 py-2 text-sm font-bold">
                  {p.emoji} {p.name}
                </p>
              </button>
              <button
                onClick={() => removeUpload(p.id)}
                aria-label="Remove page"
                className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#2d2d2d] bg-white text-[#2d2d2d] opacity-0 transition-opacity hover:bg-[#e8402a] hover:text-white group-hover:opacity-100"
              >
                <X size={16} />
              </button>
            </div>
          ))}

          {/* Built-in pages */}
          {BUILTIN_PAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => setPage(p)}
              className="group block overflow-hidden rounded-3xl border-4 border-[#2d2d2d] bg-white shadow-[5px_5px_0_0_#2d2d2d] transition-transform hover:-translate-y-1"
            >
              <div className="aspect-square w-full overflow-hidden bg-white">
                <img
                  src={svgToDataUrl(p.svg!)}
                  alt={p.name}
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <p className="truncate border-t-2 border-[#2d2d2d] px-3 py-2 text-sm font-bold">
                {p.emoji} {p.name}
              </p>
            </button>
          ))}
        </div>

        <footer className="mt-14 text-center text-xs uppercase tracking-widest text-[#2d2d2d]/40">
          Made with love 🎨
        </footer>
      </div>
    </main>
  );
}
