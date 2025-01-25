"use client";

import React, { useRef } from "react";

function EmbeddedBlog() {
  const iframeRef = useRef(null);

  const preventIframeClick = (e) => {
    // Block only click events but allow scrolling
    e.preventDefault();
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "100%" }}>
      {/* Embedded Content */}
      <iframe
        ref={iframeRef}
        src="https://blog.yubrajkhatri.com.np/"
        width="100%"
        height="1000"
        style={{
          border: "none",
        }}
        title="Embedded Blog"
      ></iframe>

      {/* Invisible Layer to Block Click Events */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          background: "transparent", // Ensure it's fully transparent
          pointerEvents: "none", // Allow scrolling but not clicking
        }}
        onClick={preventIframeClick}
      ></div>
    </div>
  );
}

export default EmbeddedBlog;