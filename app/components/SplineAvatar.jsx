"use client";

import React from "react";

export default function SplineAvatar({
  url = "https://prod.spline.design/a44gx0X3K7jNVvyR/scene.splinecode",
  scale = 0.8,
  offsetX = 0.10,
  offsetY = 0.14,
  interactive = true,
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const viewerRef = React.useRef(null);

  React.useEffect(() => {
    let mounted = true;

    const loadSplineViewer = async () => {
      try {
        if (typeof window !== "undefined") {
          if (!customElements.get("spline-viewer")) {
            await import("@splinetool/viewer");
            await new Promise(resolve => setTimeout(resolve, 200));
          }
          
          if (mounted) {
            setIsLoaded(true);
          }
        }
      } catch (error) {
        console.warn("Spline viewer failed to load:", error);
        if (mounted) {
          setError(true);
          setIsLoaded(true);
        }
      }
    };

    loadSplineViewer();

    return () => {
      mounted = false;
    };
  }, []);

  // Handle spline viewer events to suppress errors
  React.useEffect(() => {
    if (!isLoaded || !viewerRef.current) return;

    const viewer = viewerRef.current;
    
    const handleError = (event) => {
      // Suppress spline-specific errors
      event.preventDefault();
      event.stopPropagation();
    };

    // Add error event listeners
    viewer.addEventListener('error', handleError);
    viewer.addEventListener('spline-error', handleError);

    return () => {
      viewer.removeEventListener('error', handleError);
      viewer.removeEventListener('spline-error', handleError);
    };
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="relative overflow-hidden rounded-full w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative overflow-hidden rounded-full w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
        <div className="text-4xl">🤖</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-full w-40 h-40 md:w-48 md:h-48">
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${offsetX * 100}%, ${offsetY * 100}%) scale(${Math.abs(scale)})`, // Use Math.abs to ensure positive scale
          transformOrigin: "center",
          pointerEvents: interactive ? "auto" : "none",
        }}
      >
        <spline-viewer 
          ref={viewerRef}
          url={url} 
          style={{ 
            width: "100%", 
            height: "100%",
            border: "none",
            outline: "none"
          }}
          loading-anim-type="spinner-small-dark"
        />
      </div>
    </div>
  );
}