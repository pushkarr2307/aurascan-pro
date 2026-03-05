import { useState, useRef, useEffect, useCallback } from "react";
import { ScanFace, CheckCircle2, Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as faceapi from "face-api.js";

type DemoState = "idle" | "loading" | "scanning" | "detected";

const DemoSection = () => {
  const [state, setState] = useState<DemoState>("idle");
  const [timestamp, setTimestamp] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopCamera = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => () => stopCamera(), [stopCamera]);

  const startCamera = async () => {
    setState("loading");
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 480, height: 360 },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setState("scanning");

      intervalRef.current = setInterval(async () => {
        if (!videoRef.current) return;
        const detection = await faceapi.detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions({ scoreThreshold: 0.5 })
        );
        if (detection) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setTimestamp(new Date().toLocaleString());
          setState("detected");
          // Keep camera running to show the frozen frame
          setTimeout(() => {
            stopCamera();
          }, 3000);
        }
      }, 500);
    } catch (err) {
      console.error("Camera/model error:", err);
      setState("idle");
    }
  };

  const reset = () => {
    stopCamera();
    setState("idle");
  };

  return (
    <section className="relative py-24 px-4 z-10" id="demo">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Live Demo</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">
          Try real-time face detection with your camera
        </p>

        <div className="glass-card p-2 glow-primary">
          <div className="bg-background/60 rounded-xl p-6 md:p-10 flex flex-col items-center">
            {/* Camera frame */}
            <div className="relative w-full max-w-md aspect-[4/3] bg-muted/30 rounded-xl border border-glass-border overflow-hidden mb-8">
              {/* Video element (hidden until scanning) */}
              <video
                ref={videoRef}
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  state === "scanning" || state === "detected"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />

              {/* Idle / loading overlay */}
              {(state === "idle" || state === "loading") && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {state === "loading" ? (
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                  ) : (
                    <ScanFace className="w-24 h-24 text-primary/40" />
                  )}
                </div>
              )}

              {/* Scanning animation overlay */}
              {state === "scanning" && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
                </div>
              )}

              {/* Detected overlay */}
              {state === "detected" && (
                <div className="absolute inset-0 pointer-events-none border-4 border-green-400/60 rounded-xl" />
              )}

              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br" />

              {/* Status badge */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-medium">
                {state === "idle" && "READY"}
                {state === "loading" && "LOADING MODEL..."}
                {state === "scanning" && "SCANNING..."}
                {state === "detected" && "✓ FACE DETECTED"}
              </div>
            </div>

            {/* Button */}
            {(state === "idle" || state === "detected") && (
              <Button
                onClick={state === "idle" ? startCamera : reset}
                className="glow-button bg-primary text-primary-foreground mb-6"
                size="lg"
              >
                <Camera className="w-5 h-5 mr-2" />
                {state === "idle" ? "Start Camera" : "Scan Again"}
              </Button>
            )}

            {state === "scanning" && (
              <p className="text-sm text-muted-foreground animate-pulse mb-6">
                Position your face within the frame...
              </p>
            )}

            {/* Result card */}
            {state === "detected" && (
              <div className="flex items-center gap-4 glass-card px-6 py-4 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-green-400 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    Attendance Marked Successfully
                  </p>
                  <div className="text-sm text-muted-foreground space-y-0.5 mt-1">
                    <p>
                      <span className="text-foreground/80">Name:</span> Pushkar Tamboli
                    </p>
                    <p>
                      <span className="text-foreground/80">Student ID:</span>{" "}
                      STU-2024-0847
                    </p>
                    <p>
                      <span className="text-foreground/80">Timestamp:</span>{" "}
                      {timestamp}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
