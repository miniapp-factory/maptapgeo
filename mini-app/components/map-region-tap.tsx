"use client";

import { useState } from "react";

export function MapRegionTap() {
  const [message, setMessage] = useState<string | null>(null);

  const handleTap = () => {
    // In a real app, you would determine if the tapped region is correct.
    // For this demo, we simply show a success message.
    setMessage("Correct region tapped!");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 p-4 border rounded-lg shadow-sm">
      <div
        className="h-64 bg-gray-200 flex items-center justify-center cursor-pointer"
        onClick={handleTap}
      >
        <span className="text-gray-600">Tap the map region here</span>
      </div>
      {message && (
        <div className="mt-4 text-green-600 font-semibold">{message}</div>
      )}
    </div>
  );
}
