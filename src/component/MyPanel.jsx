import { useState } from "react";
import MySlider from "./MySlider";

// RGB 轉 HSL
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: h = 0;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}

// HSL 轉 RGB
function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  ];
}

function MyPanel() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);
  const [s, setS] = useState(100); // 飽和度（百分比）

  // 先將 RGB 轉 HSL，調整飽和度，再轉回 RGB
  const [h, , l] = rgbToHsl(r, g, b);
  const [rr, gg, bb] = hslToRgb(h, s / 100, l);

  return (
    <div
      style={{
        border: "2px solid #888",
        borderRadius: "16px",
        padding: "24px",
        maxWidth: "320px",
        margin: "32px auto",
        boxShadow: "0 2px 8px rgba(124, 65, 65, 0.08)",
        textAlign: "center"
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        R: <MySlider value={r} onChange={setR} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        G: <MySlider value={g} onChange={setG} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        B: <MySlider value={b} onChange={setB} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        飽: <MySlider value={s} onChange={setS} min={0} max={100} />
      </div>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: `rgb(${rr},${gg},${bb})`,
          border: "2px solid #333",
          margin: "16px auto",
          borderRadius: "12px"
        }}
      />
      <div>RGB({rr}, {gg}, {bb})</div>
      <div>HSL({Math.round(h)}, {s}%, {Math.round(l * 100)}%)</div>
      <div>飽和度: {s}%</div>
    </div>
  );
}

export default MyPanel;