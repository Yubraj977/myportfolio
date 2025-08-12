"use client";
import "@splinetool/viewer";

export default function SplineAvatar({
  url = "https://prod.spline.design/a44gx0X3K7jNVvyR/scene.splinecode",
  scale = 1.5,
  offsetX = 0.10,
  offsetY = 0.14,
  interactive = true,
}) {
  return (
    <div className="relative overflow-hidden rounded-full w-40 h-40 md:w-48 md:h-48">
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${offsetX * 100}%, ${offsetY * 100}%) scale(${scale})`,
          transformOrigin: "center",
          pointerEvents: interactive ? "auto" : "none",
        }}
      >
        <spline-viewer
          url={url}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}