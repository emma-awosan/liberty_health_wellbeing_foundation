"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, CheckCircle2, Calendar, MapPin, Sparkles } from "lucide-react";

const STORAGE_KEY = "liberty_outreach_flyer_state_v1";

// Gentle intervals so the message is conveyed without disturbing the user:
// - If the user clicks "Cancel" / closes: re-appear after 2.5 minutes (150,000 ms)
// - If the user clicks "Noted": quiet for 6 hours (21,600,000 ms)
const CANCEL_INTERVAL_MS = 2.5 * 60 * 1000;
const NOTED_INTERVAL_MS = 6 * 60 * 60 * 1000;
const INITIAL_DELAY_MS = 1100;

interface StoredFlyerState {
  action: "cancel" | "noted";
  nextShowAt: number;
}

export default function OutreachFlyerModal() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearScheduledTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const openModal = useCallback(() => {
    clearScheduledTimer();
    setIsOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimatingIn(true);
      });
    });
  }, [clearScheduledTimer]);

  const scheduleNextAppearance = useCallback(
    (delayMs: number) => {
      clearScheduledTimer();
      timerRef.current = setTimeout(() => {
        openModal();
      }, delayMs);
    },
    [clearScheduledTimer, openModal]
  );

  useEffect(() => {
    setIsMounted(true);

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: StoredFlyerState = JSON.parse(raw);
        const now = Date.now();
        if (parsed.nextShowAt && parsed.nextShowAt > now) {
          // Wait until the remaining interval expires before gently showing again
          const remaining = parsed.nextShowAt - now;
          scheduleNextAppearance(remaining);
          return () => clearScheduledTimer();
        }
      }
    } catch {
      // Ignore storage access errors
    }

    // First-time landing or interval elapsed: pop in gently after initial page paint
    scheduleNextAppearance(INITIAL_DELAY_MS);
    return () => clearScheduledTimer();
  }, [scheduleNextAppearance, clearScheduledTimer]);

  // Lock background scroll whenever the flyer modal is open
  useEffect(() => {
    if (!isMounted) return;

    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (isOpen) {
      const scrollBarWidth = window.innerWidth - htmlEl.clientWidth;
      htmlEl.style.overflow = "hidden";
      bodyEl.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        bodyEl.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      htmlEl.style.overflow = "";
      bodyEl.style.overflow = "";
      bodyEl.style.paddingRight = "";
    }

    return () => {
      htmlEl.style.overflow = "";
      bodyEl.style.overflow = "";
      bodyEl.style.paddingRight = "";
    };
  }, [isOpen, isMounted]);

  const handleDismiss = useCallback(
    (action: "cancel" | "noted") => {
      setIsAnimatingIn(false);

      const intervalMs =
        action === "noted" ? NOTED_INTERVAL_MS : CANCEL_INTERVAL_MS;
      const nextShowAt = Date.now() + intervalMs;

      try {
        const state: StoredFlyerState = { action, nextShowAt };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        // Ignore storage errors
      }

      setTimeout(() => {
        setIsOpen(false);
        scheduleNextAppearance(intervalMs);
      }, 280);
    },
    [scheduleNextAppearance]
  );

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss("cancel");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleDismiss]);

  if (!isMounted) return null;

  return (
    <>
      {/* Subtle floating reminder pill when closed so visitors can re-open on demand without being disturbed */}
      {!isOpen && (
        <button
          type="button"
          onClick={openModal}
          aria-label="View Free Medical Outreach Flyer"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-navy-deep/95 text-white text-xs font-bold shadow-lg border border-white/15 hover:bg-navy transition-all duration-300 group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Free Medical Outreach · Dec 19</span>
        </button>
      )}

      {/* Modal Overlay with Mild Blur & Scroll Lock */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="outreach-flyer-modal-title"
          className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 transition-opacity duration-300 ease-out ${
            isAnimatingIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Mildly Blurred Backdrop */}
          <div
            onClick={() => handleDismiss("cancel")}
            aria-hidden="true"
            className="fixed inset-0 bg-navy-deep/45 backdrop-blur-[5px] transition-opacity duration-300"
          />

          {/* Slide-In & Pop Center Card */}
          <div
            className={`relative z-10 w-full max-w-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[94vh] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isAnimatingIn
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-92 opacity-0"
            }`}
          >
            {/* Compact Top Header Bar */}
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 bg-navy-deep text-white border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
                <p
                  id="outreach-flyer-modal-title"
                  className="text-xs sm:text-sm font-bold tracking-wide text-white truncate font-heading"
                >
                  Upcoming Free Medical Outreach
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleDismiss("cancel")}
                aria-label="Cancel and close flyer"
                className="w-7 h-7 text-white flex items-center justify-center cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Flyer Image Showcase */}
            <div className="relative w-full bg-sky-light/60 flex items-center justify-center overflow-hidden p-2 sm:p-3 flex-1 min-h-0">
              <div className="relative w-full max-h-[68vh] aspect-[1600/2260] rounded-xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
                <Image
                  src="/free-medical-outreach-flyer.png"
                  alt="Liberty Health & Wellbeing Foundation and 60 Seconds With Doc — Free Medical Outreach on Saturday, 19th December 2026 at 10:00AM in Aseese, Mowe, Ogun State"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 92vw, 480px"
                />
              </div>
            </div>

            {/* Bottom Event Summary & Action Buttons (Cancel / Noted) */}
            <div className="px-4 sm:px-5 py-3.5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1 text-navy font-bold">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  Sat, Dec 19, 2026 · 10:00 AM
                </span>
                <span className="inline-flex items-center gap-1 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Aseese, Mowe, Ogun State
                </span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => handleDismiss("cancel")}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDismiss("noted")}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-navy text-white text-xs font-bold shadow-xs cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Noted</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
