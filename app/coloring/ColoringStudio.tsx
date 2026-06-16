"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Brush,
  Download,
  Eraser,
  PaintBucket,
  Printer,
  Trash2,
  Undo2,
} from "lucide-react";
import { floodFill, hexToRgb } from "./floodFill";
import { ColoringPage, svgToDataUrl } from "./pages";

type Tool = "fill" | "brush" | "eraser";

const PALETTE = [
  "#e8402a", "#ff5a5f", "#ff8fab", "#ff006e",
  "#ff9f1c", "#ffb703", "#ffd60a", "#fff200",
  "#bfe34a", "#8ac926", "#38b000", "#0b6e4f",
  "#7ee0e6", "#4cc9f0", "#4361ee", "#023e8a",
  "#c08bf0", "#9b5de5", "#7209b7", "#5a189a",
  "#f4c9a8", "#c98a5e", "#a0522d", "#6f4518",
  "#ffffff", "#c7ccd1", "#6b7280", "#2d2d2d",
];

const MAX_HISTORY = 14;

export default function ColoringStudio({
  page,
  onBack,
}: {
  page: ColoringPage;
  onBack: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseRef = useRef<ImageData | null>(null);
  const historyRef = useRef<ImageData[]>([]);
  const drawingRef = useRef(false);
  const lastRef = useRef<{ x: number; y: number } | null>(null);

  const [tool, setTool] = useState<Tool>("fill");
  const [color, setColor] = useState<string>("#e8402a");
  const [brushSize, setBrushSize] = useState(16);
  const [tolerance, setTolerance] = useState(36);
  const [canUndo, setCanUndo] = useState(false);
  const [loading, setLoading] = useState(true);

  const getCtx = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d", { willReadFrequently: true });
  }, []);

  // Load the chosen page onto the canvas.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = getCtx();
    if (!canvas || !ctx) return;

    setLoading(true);
    historyRef.current = [];
    setCanUndo(false);

    const img = new Image();
    img.onload = () => {
      const maxDim = 1100;
      const w = img.naturalWidth || 800;
      const h = img.naturalHeight || 800;
      const scale = Math.min(maxDim / Math.max(w, h), 2);
      const cw = Math.max(1, Math.round(w * scale));
      const ch = Math.max(1, Math.round(h * scale));
      canvas.width = cw;
      canvas.height = ch;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, cw, ch);
      baseRef.current = ctx.getImageData(0, 0, cw, ch);
      setLoading(false);
    };
    img.onerror = () => setLoading(false);
    img.src = page.svg ? svgToDataUrl(page.svg) : page.src || "";
  }, [page, getCtx]);

  const getPos = useCallback((e: React.PointerEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  }, []);

  const pushHistory = useCallback(() => {
    const ctx = getCtx();
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (historyRef.current.length > MAX_HISTORY) historyRef.current.shift();
    setCanUndo(true);
  }, [getCtx]);

  const doFill = useCallback(
    (pos: { x: number; y: number }) => {
      const ctx = getCtx();
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;
      pushHistory();
      const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const changed = floodFill(id, pos.x, pos.y, hexToRgb(color), tolerance);
      if (changed) {
        ctx.putImageData(id, 0, 0);
      } else {
        historyRef.current.pop();
        setCanUndo(historyRef.current.length > 0);
      }
    },
    [getCtx, pushHistory, color, tolerance]
  );

  const strokeTo = useCallback(
    (from: { x: number; y: number }, to: { x: number; y: number }) => {
      const ctx = getCtx();
      if (!ctx) return;
      ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color;
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    },
    [getCtx, tool, color, brushSize]
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (loading) return;
      const pos = getPos(e);
      if (tool === "fill") {
        doFill(pos);
        return;
      }
      pushHistory();
      drawingRef.current = true;
      lastRef.current = pos;
      canvasRef.current?.setPointerCapture(e.pointerId);
      strokeTo(pos, { x: pos.x + 0.01, y: pos.y + 0.01 });
    },
    [loading, getPos, tool, doFill, pushHistory, strokeTo]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!drawingRef.current || !lastRef.current) return;
      const pos = getPos(e);
      strokeTo(lastRef.current, pos);
      lastRef.current = pos;
    },
    [getPos, strokeTo]
  );

  const onPointerUp = useCallback(() => {
    drawingRef.current = false;
    lastRef.current = null;
  }, []);

  const undo = useCallback(() => {
    const ctx = getCtx();
    const prev = historyRef.current.pop();
    if (ctx && prev) ctx.putImageData(prev, 0, 0);
    setCanUndo(historyRef.current.length > 0);
  }, [getCtx]);

  const clearAll = useCallback(() => {
    const ctx = getCtx();
    if (ctx && baseRef.current) {
      ctx.putImageData(baseRef.current, 0, 0);
      historyRef.current = [];
      setCanUndo(false);
    }
  }, [getCtx]);

  const save = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = `${page.name.replace(/\s+/g, "-").toLowerCase()}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  }, [page.name]);

  const print = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(
      `<html><head><title>${page.name}</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh"><img src="${canvas.toDataURL(
        "image/png"
      )}" style="max-width:100%;max-height:100vh" onload="window.print()"/></body></html>`
    );
    win.document.close();
  }, [page.name]);

  const toolBtn = (
    id: Tool,
    label: string,
    Icon: typeof PaintBucket
  ) => (
    <button
      onClick={() => setTool(id)}
      className={`flex flex-1 flex-col items-center gap-1 rounded-2xl border-2 py-3 text-xs font-bold uppercase tracking-wide transition-colors ${
        tool === id
          ? "border-[#2d2d2d] bg-[#2d2d2d] text-white"
          : "border-[#2d2d2d]/20 bg-white text-[#2d2d2d] hover:border-[#2d2d2d]/50"
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  return (
    <main className="min-h-screen px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#2d2d2d] bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-[#2d2d2d] hover:text-white"
          >
            <ArrowLeft size={16} />
            Pick another
          </button>
          <h1 className="text-xl font-extrabold tracking-tight md:text-2xl">
            <span className="mr-2">{page.emoji}</span>
            {page.name}
          </h1>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Canvas */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border-4 border-[#2d2d2d] bg-white shadow-[8px_8px_0_0_#2d2d2d]">
              {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 text-sm uppercase tracking-widest text-[#2d2d2d]/60">
                  Loading…
                </div>
              )}
              <canvas
                ref={canvasRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
                className="block w-full"
                style={{ touchAction: "none", cursor: "crosshair" }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="w-full shrink-0 space-y-5 lg:w-80">
            {/* Tools */}
            <div className="flex gap-2">
              {toolBtn("fill", "Fill", PaintBucket)}
              {toolBtn("brush", "Brush", Brush)}
              {toolBtn("eraser", "Eraser", Eraser)}
            </div>

            {/* Palette */}
            <div className="rounded-3xl border-2 border-[#2d2d2d]/15 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2d2d2d]/60">
                  Colors
                </p>
                <label className="flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#2d2d2d]/60">
                  Custom
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-7 w-7 cursor-pointer rounded-md border border-[#2d2d2d]/20 bg-transparent p-0"
                  />
                </label>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {PALETTE.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    aria-label={`Color ${c}`}
                    className={`aspect-square rounded-full border-2 transition-transform hover:scale-110 ${
                      color.toLowerCase() === c.toLowerCase()
                        ? "border-[#2d2d2d] ring-2 ring-[#2d2d2d] ring-offset-1"
                        : "border-black/10"
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span
                  className="h-8 w-8 shrink-0 rounded-full border-2 border-[#2d2d2d]"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2d2d2d]/60">
                  Picked
                </span>
              </div>
            </div>

            {/* Brush size */}
            {tool !== "fill" && (
              <div className="rounded-3xl border-2 border-[#2d2d2d]/15 bg-white p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d2d2d]/60">
                  Brush size
                </p>
                <input
                  type="range"
                  min={4}
                  max={60}
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-full accent-[#e8402a]"
                />
              </div>
            )}

            {/* Fill sensitivity */}
            {tool === "fill" && (
              <div className="rounded-3xl border-2 border-[#2d2d2d]/15 bg-white p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#2d2d2d]/60">
                  Fill reach
                </p>
                <p className="mb-2 text-[11px] leading-snug text-[#2d2d2d]/40">
                  Turn up if colors leave a white gap near the lines.
                </p>
                <input
                  type="range"
                  min={10}
                  max={90}
                  value={tolerance}
                  onChange={(e) => setTolerance(Number(e.target.value))}
                  className="w-full accent-[#e8402a]"
                />
              </div>
            )}

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={undo}
                disabled={!canUndo}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2d2d2d]/20 bg-white py-3 text-xs font-bold uppercase tracking-wide transition-colors enabled:hover:border-[#2d2d2d] disabled:opacity-40"
              >
                <Undo2 size={16} />
                Undo
              </button>
              <button
                onClick={clearAll}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2d2d2d]/20 bg-white py-3 text-xs font-bold uppercase tracking-wide transition-colors hover:border-[#2d2d2d]"
              >
                <Trash2 size={16} />
                Clear
              </button>
              <button
                onClick={save}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2d2d2d] bg-[#2d2d2d] py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#e8402a] hover:border-[#e8402a]"
              >
                <Download size={16} />
                Save
              </button>
              <button
                onClick={print}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2d2d2d]/20 bg-white py-3 text-xs font-bold uppercase tracking-wide transition-colors hover:border-[#2d2d2d]"
              >
                <Printer size={16} />
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
