"use client";
import dynamic from "next/dynamic";

// Ensure three/R3F only load on the client (prevents SSR crashes)
const Avatar3D = dynamic(() => import("./Avatar3DCanvas"), { ssr: false });

export default Avatar3D;