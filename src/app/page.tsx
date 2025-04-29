"use client";

import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className={`box ${isVisible ? "visible" : ""}`}>CSS Transition</h1>
      <button className="" onClick={() => setIsVisible(!isVisible)}>
        Click me
      </button>
    </div>
  );
}
