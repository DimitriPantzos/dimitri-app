export type RGB = [number, number, number];

export function hexToRgb(hex: string): RGB {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const num = parseInt(full, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/**
 * Scanline flood fill (paint-bucket). Fills the contiguous region of pixels
 * that match the color at (startX, startY) within `tolerance`, stopping at the
 * dark outlines of the coloring page. Mutates `imageData` in place.
 *
 * `tolerance` is a per-pixel value (~10-80). Higher values reach further into
 * the anti-aliased edges near the black lines — useful for photographed or
 * JPEG-compressed coloring pages that aren't perfectly clean.
 *
 * Returns true if any pixels changed.
 */
export function floodFill(
  imageData: ImageData,
  startX: number,
  startY: number,
  fillColor: RGB,
  tolerance = 32
): boolean {
  const { width, height, data } = imageData;
  startX = Math.round(startX);
  startY = Math.round(startY);
  if (startX < 0 || startY < 0 || startX >= width || startY >= height) return false;

  const startIdx = (startY * width + startX) * 4;
  const sr = data[startIdx];
  const sg = data[startIdx + 1];
  const sb = data[startIdx + 2];
  const sa = data[startIdx + 3];

  const [fr, fg, fb] = fillColor;

  // Already the fill color — nothing to do (also prevents an infinite loop).
  if (Math.abs(sr - fr) <= 2 && Math.abs(sg - fg) <= 2 && Math.abs(sb - fb) <= 2 && sa === 255) {
    return false;
  }

  const tol2 = tolerance * tolerance * 4;
  const match = (idx: number) => {
    const dr = data[idx] - sr;
    const dg = data[idx + 1] - sg;
    const db = data[idx + 2] - sb;
    const da = data[idx + 3] - sa;
    return dr * dr + dg * dg + db * db + da * da <= tol2;
  };

  const visited = new Uint8Array(width * height);
  const stack: number[] = [startX, startY];
  let changed = false;

  while (stack.length) {
    const y = stack.pop()!;
    const x = stack.pop()!;

    let px = x;
    while (px >= 0 && !visited[y * width + px] && match((y * width + px) * 4)) px--;
    px++;

    let reachUp = false;
    let reachDown = false;
    while (px < width && !visited[y * width + px] && match((y * width + px) * 4)) {
      const p = y * width + px;
      visited[p] = 1;
      const i = p * 4;
      data[i] = fr;
      data[i + 1] = fg;
      data[i + 2] = fb;
      data[i + 3] = 255;
      changed = true;

      if (y > 0) {
        const up = (y - 1) * width + px;
        const m = !visited[up] && match(up * 4);
        if (m && !reachUp) {
          stack.push(px, y - 1);
          reachUp = true;
        } else if (!m) {
          reachUp = false;
        }
      }
      if (y < height - 1) {
        const dn = (y + 1) * width + px;
        const m = !visited[dn] && match(dn * 4);
        if (m && !reachDown) {
          stack.push(px, y + 1);
          reachDown = true;
        } else if (!m) {
          reachDown = false;
        }
      }
      px++;
    }
  }

  return changed;
}
