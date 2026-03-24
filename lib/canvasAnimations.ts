import type { CanvasDrawContext } from '@/types';

const C = 'rgba(26,58,92,';

export function drawSiphon({ ctx, width: bW, height: bH, t, parts }: CanvasDrawContext): void {
  // Full-width flowing curves
  for (let i = 0; i < 35; i++) {
    ctx.beginPath();
    ctx.strokeStyle = C + '0.14)';
    ctx.lineWidth = 1.2;
    const yBase = i * (bH / 35);
    for (let x = 0; x < bW; x += 3) {
      const y =
        yBase +
        Math.sin(x * 0.005 + t * 0.001 + i * 0.5) * 40 +
        Math.sin(x * 0.002 + t * 0.0004) * 55;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  // Large siphon tube shape on the right side
  const sx = bW * 0.7, sy = bH * 0.2;
  ctx.strokeStyle = C + '0.25)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(sx, sy + 200);
  ctx.lineTo(sx, sy);
  ctx.quadraticCurveTo(sx, sy - 60, sx + 60, sy - 60);
  ctx.quadraticCurveTo(sx + 140, sy - 60, sx + 140, sy + 20);
  ctx.lineTo(sx + 140, sy + 350);
  ctx.stroke();
  // Flowing particles
  parts.forEach(p => {
    p.x += 0.3 + Math.sin(p.phase + t * 0.002) * 0.4;
    p.y += 0.5 + Math.cos(p.x * 0.008 + t * 0.001) * 0.8;
    if (p.x > bW) p.x = bW * 0.5;
    if (p.y > bH) { p.y = -10; p.x = bW * 0.5 + Math.random() * bW * 0.5; }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 1.8, 0, Math.PI * 2);
    ctx.fillStyle = C + '0.12)';
    ctx.fill();
  });
}

export function drawWave({ ctx, width: bW, height: bH, t }: CanvasDrawContext): void {
  // Damped sine waves
  for (let i = 0; i < 22; i++) {
    ctx.beginPath();
    const decay = Math.exp(-i * 0.08);
    ctx.strokeStyle = C + (0.10 + i * 0.005) + ')';
    ctx.lineWidth = 1.5;
    for (let x = 0; x < bW; x += 2) {
      const rightBias = 0.5 + (x / bW) * 0.8;
      const y =
        bH / 2 +
        Math.sin(x * 0.008 + t * 0.002 + i * 0.7) * (120 * decay * rightBias) +
        i * 14 -
        140;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  // Large spring on the right
  ctx.strokeStyle = C + '0.28)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  const springX = bW * 0.75;
  for (let y = bH * 0.08; y < bH * 0.92; y += 2) {
    const progress = (y - bH * 0.08) / (bH * 0.84);
    const amp = 50 * Math.sin(progress * Math.PI);
    const damping = Math.exp(-Math.abs(progress - 0.5) * 2);
    const x = springX + Math.sin(y * 0.06 + t * 0.003) * amp * damping;
    y === bH * 0.08 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
  // Magnet bob
  const bobY = bH * 0.75 + Math.sin(t * 0.003) * 30;
  ctx.beginPath();
  ctx.arc(springX, bobY, 18, 0, Math.PI * 2);
  ctx.fillStyle = C + '0.18)';
  ctx.fill();
}

export function drawDrops({ ctx, width: bW, height: bH, t, parts }: CanvasDrawContext): void {
  // Concentric rings
  const cx = bW * 0.68, cy = bH * 0.55;
  for (let i = 0; i < 14; i++) {
    ctx.beginPath();
    const r = 20 + i * 35 + Math.sin(t * 0.002 + i) * 8;
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = C + (0.18 - i * 0.01) + ')';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  // Ring falling from top
  const ringY = (t * 0.08) % (bH * 0.5);
  ctx.beginPath();
  ctx.ellipse(cx, cy - bH * 0.3 + ringY, 35, 8, 0, 0, Math.PI * 2);
  ctx.strokeStyle = C + '0.25)';
  ctx.lineWidth = 3;
  ctx.stroke();
  // Rising fountain particles
  parts.forEach((p, i) => {
    const angle = (i / parts.length) * Math.PI * 2 + t * 0.001;
    const r0 = 40 + Math.sin(t * 0.001 + i * 0.3) * 20;
    const rise = Math.max(0, Math.sin(angle + t * 0.002) * 260);
    p.x = cx + Math.cos(angle) * r0 * (1 + rise / 400);
    p.y = cy - rise + Math.sin(t * 0.004 + i) * 8;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 1.8, 0, Math.PI * 2);
    ctx.fillStyle = C + (0.10 + rise / 400) + ')';
    ctx.fill();
  });
}

export function drawField({ ctx, width: bW, height: bH, t }: CanvasDrawContext): void {
  // Field line spirals
  const cx = bW * 0.72, cy = bH * 0.48;
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    const startA = (i / 50) * Math.PI * 2;
    for (let s = 0; s < 300; s++) {
      const frac = s / 300;
      const r = 25 + frac * 420;
      const a = startA + frac * 2 + Math.sin(t * 0.001 + i * 0.7) * 0.25;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.5;
      s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = C + '0.10)';
    ctx.lineWidth = 0.9;
    ctx.stroke();
  }
  // Levitating plate
  const py = cy - 35 + Math.sin(t * 0.003) * 14;
  ctx.fillStyle = C + '0.28)';
  ctx.fillRect(cx - 70, py, 140, 10);
  // Shadow beneath plate
  ctx.fillStyle = C + '0.06)';
  ctx.beginPath();
  ctx.ellipse(cx, py + 25, 80, 6, 0, 0, Math.PI * 2);
  ctx.fill();
  // Magnet array below
  for (let m = 0; m < 5; m++) {
    const mx = cx - 80 + m * 40;
    ctx.fillStyle = m % 2 === 0 ? C + '0.20)' : C + '0.12)';
    ctx.fillRect(mx, cy + 50, 30, 25);
  }
}

export function drawSpectrum({ ctx, width: bW, height: bH, t }: CanvasDrawContext): void {
  // Vertical spectral bands
  const numBands = 18;
  const startX = bW * 0.42;
  const bandW = (bW - startX) / numBands;
  for (let i = 0; i < numBands; i++) {
    const hue = (i * 20 + t * 0.08) % 360;
    const x = startX + i * bandW;
    const wave = Math.sin(t * 0.002 + i * 0.4) * 0.06;
    ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${0.18 + wave})`;
    ctx.fillRect(x, 0, bandW + 1, bH);
  }
  // White light beam
  const cy = bH * 0.48;
  ctx.strokeStyle = 'rgba(80,80,80,0.3)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(bW * 0.15, cy);
  ctx.lineTo(bW * 0.48, cy);
  ctx.stroke();
  // Prism triangle
  const px = bW * 0.52, py = cy;
  const ps = Math.min(bW, bH) * 0.18;
  ctx.beginPath();
  ctx.moveTo(px, py - ps);
  ctx.lineTo(px - ps * 0.7, py + ps * 0.6);
  ctx.lineTo(px + ps * 0.7, py + ps * 0.6);
  ctx.closePath();
  ctx.strokeStyle = 'rgba(26,58,92,0.35)';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = 'rgba(26,58,92,0.04)';
  ctx.fill();
  // Dispersed rays
  const fanOriginX = px + ps * 0.3;
  const numRays = 8;
  for (let i = 0; i < numRays; i++) {
    const frac = i / (numRays - 1);
    const hue = frac * 300;
    const angle = (frac - 0.5) * 0.6;
    const endX = bW * 0.97;
    const endY = cy + Math.tan(angle) * (endX - fanOriginX);
    ctx.beginPath();
    ctx.moveTo(fanOriginX, cy);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = `hsla(${hue}, 90%, 50%, 0.35)`;
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  // Rotating polarizer disc
  const discX = bW * 0.78, discR = Math.min(bW, bH) * 0.12;
  ctx.beginPath();
  ctx.arc(discX, cy, discR, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(26,58,92,0.25)';
  ctx.lineWidth = 2.5;
  ctx.stroke();
  const rot = t * 0.0015;
  for (let i = 0; i < 12; i++) {
    const ly = -discR + (i / 12) * discR * 2;
    const lx = Math.sqrt(Math.max(0, discR * discR - ly * ly));
    ctx.save();
    ctx.translate(discX, cy);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.moveTo(-lx, ly);
    ctx.lineTo(lx, ly);
    ctx.strokeStyle = 'rgba(26,58,92,0.15)';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.restore();
  }
}

export function drawFlame({ ctx, width: bW, height: bH, t, parts }: CanvasDrawContext): void {
  // Large flame ring
  const cx = bW * 0.68, cy = bH * 0.48;
  const ringR = Math.min(bW, bH) * 0.32;
  ctx.beginPath();
  ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
  ctx.strokeStyle = C + '0.18)';
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
  ctx.strokeStyle = C + '0.06)';
  ctx.lineWidth = 20;
  ctx.stroke();
  // Flame particles
  parts.forEach((p, i) => {
    const base = (i / parts.length) * Math.PI * 2;
    const fa = base + t * 0.0015;
    const flicker = Math.sin(t * 0.008 + i * 2.5) * 22 + Math.random() * 8;
    const r = ringR + flicker;
    p.x = cx + Math.cos(fa) * r;
    p.y = cy + Math.sin(fa) * r - Math.abs(Math.sin(fa + t * 0.003)) * 28;
    const warmth = (Math.sin(fa * 3 + t * 0.002) + 1) / 2;
    const hue = 12 + warmth * 35;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 2.8, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${hue}, 65%, 55%, ${0.14 + warmth * 0.12})`;
    ctx.fill();
  });
  // Propagation glow
  const glowAngle = t * 0.0015;
  const gx = cx + Math.cos(glowAngle) * ringR;
  const gy = cy + Math.sin(glowAngle) * ringR;
  const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 60);
  grad.addColorStop(0, 'rgba(245,158,66,0.20)');
  grad.addColorStop(1, 'rgba(245,158,66,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(gx - 60, gy - 60, 120, 120);
}

import type { DrawFnKey, DrawFn } from '@/types';

export const DRAW_FNS: Record<DrawFnKey, DrawFn> = {
  siphon:   drawSiphon,
  wave:     drawWave,
  drops:    drawDrops,
  field:    drawField,
  spectrum: drawSpectrum,
  flame:    drawFlame,
};
