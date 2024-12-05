import React, { useRef, useEffect, useState } from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";

function Clock() {
  const analogRef = useRef(null);
  const digitalRef = useRef(null);
  const videoRef = useRef(null); // Ref for fallback video
  const [wakeLock, setWakeLock] = useState(null);

  // Function to request fullscreen
  const enterFullscreen = (ref) => {
    if (ref.current) {
      if (ref.current.requestFullscreen) {
        ref.current.requestFullscreen();
      } else if (ref.current.webkitRequestFullscreen) {
        ref.current.webkitRequestFullscreen();
      } else if (ref.current.mozRequestFullScreen) {
        ref.current.mozRequestFullScreen();
      } else if (ref.current.msRequestFullscreen) {
        ref.current.msRequestFullscreen();
      }
    }
  };

  // Request Wake Lock
  const requestWakeLock = async () => {
    if ("wakeLock" in navigator) {
      try {
        const lock = await navigator.wakeLock.request("screen");
        setWakeLock(lock);

        // Listen for release event
        lock.addEventListener("release", () => {
          console.log("Wake Lock released");
        });

        console.log("Wake Lock acquired");
      } catch (err) {
        console.error("Failed to acquire Wake Lock:", err);
      }
    } else {
      console.log("Wake Lock API not supported. Using fallback...");
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Error playing fallback video:", err);
        });
      }
    }
  };

  // Release Wake Lock when component unmounts
  useEffect(() => {
    requestWakeLock();

    return () => {
      if (wakeLock) {
        wakeLock.release();
        console.log("Wake Lock released on cleanup");
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = ""; // Stop the video
      }
    };
  }, [wakeLock]);

  return (
    <div>
      <div
        ref={analogRef}
        onClick={() => enterFullscreen(analogRef)}
        style={{ cursor: "pointer" }}
      >
        <AnalogClock />
      </div>
      <div
        ref={digitalRef}
        onClick={() => enterFullscreen(digitalRef)}
        style={{ cursor: "pointer" }}
      >
        <DigitalClock />
      </div>
      {/* Hidden video for fallback */}
    </div>
  );
}

export default Clock;
