import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export function parseLocalDate(dateStr: string): Date | null {
  const trimmed = dateStr.trim();
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (isoMatch) {
    const year = Number(isoMatch[1]);
    const month = Number(isoMatch[2]);
    const day = Number(isoMatch[3]);
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      return date;
    }
    return null;
  }

  const usMatch = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(trimmed);
  if (usMatch) {
    const month = Number(usMatch[1]);
    const day = Number(usMatch[2]);
    const year = Number(usMatch[3]);
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    ) {
      return date;
    }
    return null;
  }

  return null;
}

export function formatIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function isSaturdayDate(dateStr: string): boolean {
  const parsed = parseLocalDate(dateStr);
  if (!parsed) return false;
  return parsed.getDay() === 6;
}

export function isValidAppointmentDate(dateStr: string): boolean {
  const parsed = parseLocalDate(dateStr);
  return parsed !== null && parsed.getDay() !== 6;
}

interface AppointmentDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function AppointmentDatePicker({
  value,
  onChange,
  className = "",
}: AppointmentDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [saturdayError, setSaturdayError] = useState<string | null>(null);
  const [popoverCoords, setPopoverCoords] = useState<{
    top: number;
    left: number;
    isMobile: boolean;
  }>({ top: 0, left: 0, isMobile: false });

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const initialDate = parseLocalDate(value) || new Date();
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());

  // Sync viewed month when value changes externally
  useEffect(() => {
    const parsed = parseLocalDate(value);
    if (parsed) {
      setViewYear(parsed.getFullYear());
      setViewMonth(parsed.getMonth());
    }
  }, [value]);

  // Sync native HTML5 custom validity so browser form submission also blocks Saturdays or invalid entries
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    if (!value.trim()) {
      input.setCustomValidity("");
      setSaturdayError(null);
      return;
    }

    if (isSaturdayDate(value)) {
      const msg = "Saturdays are unavailable. Please choose Sunday through Friday.";
      input.setCustomValidity(msg);
      setSaturdayError(msg);
    } else if (value.trim().length >= 8 && !parseLocalDate(value)) {
      input.setCustomValidity("Please enter a valid date (YYYY-MM-DD).");
      setSaturdayError(null);
    } else {
      input.setCustomValidity("");
      setSaturdayError(null);
    }
  }, [value]);

  const updatePosition = () => {
    if (!inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 640;
    const calendarHeight = 335;
    const spaceBelow = window.innerHeight - rect.bottom;
    const openUpward = spaceBelow < calendarHeight && rect.top > calendarHeight;

    setPopoverCoords({
      top: openUpward ? Math.max(12, rect.top - calendarHeight - 6) : rect.bottom + 6,
      left: Math.min(Math.max(12, rect.left), window.innerWidth - 300),
      isMobile,
    });
  };

  const openCalendar = () => {
    updatePosition();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        calendarRef.current &&
        !calendarRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleResizeOrScroll = () => {
      updatePosition();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll, true);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll, true);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const candidate = new Date(viewYear, viewMonth, day);
    if (candidate.getDay() === 6) {
      // Saturday is strictly disabled
      return;
    }
    const iso = formatIsoDate(candidate);
    onChange(iso);
    setSaturdayError(null);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    onChange(raw);
  };

  const handleInputBlur = () => {
    const parsed = parseLocalDate(value);
    if (parsed && parsed.getDay() !== 6) {
      const normalized = formatIsoDate(parsed);
      if (normalized !== value) {
        onChange(normalized);
      }
    }
  };

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const selectedParsed = parseLocalDate(value);
  const selectedIso = selectedParsed ? formatIsoDate(selectedParsed) : "";
  const todayIso = formatIsoDate(new Date());

  const calendarContent = (
    <div
      ref={calendarRef}
      role="dialog"
      aria-label="Choose preferred appointment date"
      className="w-[288px] max-w-[calc(100vw-24px)] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-4 text-slate-900 dark:text-white select-none"
    >
      {/* Month / Year Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="h-8 w-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-display font-bold text-slate-900 dark:text-white">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="h-8 w-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 mb-1.5 text-center">
        {WEEKDAYS.map((dayName, idx) => (
          <div
            key={dayName}
            className={`text-[11px] font-mono font-bold py-1 ${
              idx === 6
                ? "text-slate-300 dark:text-slate-600"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
          <div key={`empty-${idx}`} className="h-8" />
        ))}

        {Array.from({ length: daysInMonth }).map((_, idx) => {
          const day = idx + 1;
          const dateObj = new Date(viewYear, viewMonth, day);
          const isSaturday = dateObj.getDay() === 6;
          const iso = formatIsoDate(dateObj);
          const isSelected = selectedIso === iso && !isSaturday;
          const isToday = todayIso === iso;

          return (
            <button
              key={day}
              type="button"
              disabled={isSaturday}
              aria-disabled={isSaturday}
              aria-label={`${MONTHS[viewMonth]} ${day}, ${viewYear}${
                isSaturday ? " (Unavailable)" : ""
              }`}
              onClick={() => handleSelectDay(day)}
              title={isSaturday ? "Saturdays are unavailable" : iso}
              className={`h-8 w-full rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                isSaturday
                  ? "text-slate-300 dark:text-slate-600 bg-slate-100/70 dark:bg-slate-800/40 line-through cursor-not-allowed opacity-60"
                  : isSelected
                  ? "bg-blue-600 text-white font-bold shadow-sm cursor-pointer"
                  : isToday
                  ? "border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 cursor-pointer"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Availability Footer Note */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Sun–Fri available</span>
        <span className="text-slate-400 dark:text-slate-500 font-medium">
          Sat closed
        </span>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          required
          name="preferred_date"
          placeholder="YYYY-MM-DD"
          value={value}
          onFocus={openCalendar}
          onClick={openCalendar}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="off"
          aria-invalid={Boolean(saturdayError)}
          className={`${className} w-full pr-10 ${
            saturdayError
              ? "!border-red-500 focus:!border-red-500 focus:!ring-red-100 dark:focus:!ring-red-900/30"
              : ""
          }`}
        />
        <button
          type="button"
          onClick={() => (isOpen ? setIsOpen(false) : openCalendar())}
          aria-label="Toggle date picker"
          className="absolute right-3 text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <Calendar className="h-4 w-4" />
        </button>
      </div>

      {saturdayError && (
        <p className="mt-1.5 text-[11px] font-semibold text-red-600 dark:text-red-400">
          {saturdayError}
        </p>
      )}

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          popoverCoords.isMobile ? (
            <div
              className="fixed inset-0 z-[80] bg-slate-950/50 backdrop-blur-[1px] flex items-center justify-center p-4"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) setIsOpen(false);
              }}
            >
              {calendarContent}
            </div>
          ) : (
            <div
              style={{
                position: "fixed",
                top: `${popoverCoords.top}px`,
                left: `${popoverCoords.left}px`,
                zIndex: 80,
              }}
            >
              {calendarContent}
            </div>
          ),
          document.body
        )}
    </div>
  );
}
