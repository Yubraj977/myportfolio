// SplineErrorFilter.js - A more robust error filter component
"use client";

import React from "react";

export function SplineErrorFilter() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    // More comprehensive check for Spline-related errors
    const isSplineError = (message) => {
      if (typeof message !== "string") return false;
      
      const splinePatterns = [
        "Missing property",
        "@splinetool/viewer",
        "@splinetool/runtime",
        "spline-viewer",
        "buildTimeline",
        "Spline",
      ];
      
      return splinePatterns.some(pattern => 
        message.toLowerCase().includes(pattern.toLowerCase())
      );
    };

    // Store original console methods
    const originalError = console.error;
    const originalWarn = console.warn;

    // Override console.error
    console.error = (...args) => {
      const message = args.join(" ");
      if (isSplineError(message)) {
        return; // Suppress Spline errors
      }
      return originalError(...args);
    };

    // Override console.warn
    console.warn = (...args) => {
      const message = args.join(" ");
      if (isSplineError(message)) {
        return; // Suppress Spline warnings
      }
      return originalWarn(...args);
    };

    // Handle window errors
    const handleWindowError = (event) => {
      const message = [
        event?.message,
        event?.error?.message,
        event?.error?.stack,
        event?.filename,
      ].filter(Boolean).join(" ");

      if (isSplineError(message)) {
        event.preventDefault();
        event.stopPropagation();
        return true;
      }
    };

    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event) => {
      const message = [
        event?.reason?.message,
        event?.reason?.stack,
        String(event?.reason),
      ].filter(Boolean).join(" ");

      if (isSplineError(message)) {
        event.preventDefault();
        return true;
      }
    };

    // Add event listeners
    window.addEventListener("error", handleWindowError, true);
    window.addEventListener("unhandledrejection", handleUnhandledRejection, true);

    // Remove Next.js error overlay entries for Spline errors
    const removeSplineErrorOverlays = () => {
      try {
        // Target Next.js error overlay containers
        const overlaySelectors = [
          '[data-nextjs-portal]',
          '#__nextjs__container_portal',
          '[data-nextjs-dialog-overlay]',
          '.nextjs-portal',
        ];

        overlaySelectors.forEach(selector => {
          const containers = document.querySelectorAll(selector);
          containers.forEach(container => {
            // Find text nodes containing Spline error messages
            const walker = document.createTreeWalker(
              container,
              NodeFilter.SHOW_TEXT,
              null,
              false
            );

            let node;
            const nodesToRemove = [];

            while ((node = walker.nextNode())) {
              if (isSplineError(node.nodeValue || "")) {
                // Find the error card parent (usually 3-5 levels up)
                let parent = node.parentElement;
                let attempts = 0;
                while (parent && attempts < 8) {
                  if (
                    parent.getAttribute("data-nextjs-dialog") ||
                    parent.className?.includes("error") ||
                    parent.className?.includes("dialog") ||
                    parent.style?.position === "fixed"
                  ) {
                    nodesToRemove.push(parent);
                    break;
                  }
                  parent = parent.parentElement;
                  attempts++;
                }
              }
            }

            // Remove identified error cards
            nodesToRemove.forEach(node => {
              try {
                node.remove();
              } catch (e) {
                // Ignore removal errors
              }
            });
          });
        });
      } catch (error) {
        // Silently handle any errors in cleanup
      }
    };

    // Run cleanup immediately and on DOM changes
    removeSplineErrorOverlays();

    const observer = new MutationObserver(() => {
      // Debounce the cleanup function
      setTimeout(removeSplineErrorOverlays, 100);
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: false,
    });

    // Cleanup function
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      window.removeEventListener("error", handleWindowError, true);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection, true);
      observer.disconnect();
    };
  }, []);

  return null;
}