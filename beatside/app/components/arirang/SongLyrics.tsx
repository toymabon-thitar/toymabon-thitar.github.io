
"use client";

import { useState } from "react";
import hooliganData from "@/app/data/lyrics/hooligan.json";

type Language = "original" | "thai" | "english";

type Props = {
  title: string;
  note?: string;
};

const tabs: { id: Language; label: string }[] = [
  { id: "original", label: "Original" },
  { id: "thai", label: "ภาษาไทย" },
  { id: "english", label: "English" },
];

export default function SongLyrics({ title, note }: Props) {
  const [language, setLanguage] = useState<Language>("original");

  return (
    <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-colors duration-200 md:p-8">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--primary)]">
            LYRICS
          </p>

          <h2 className="mt-2 text-xl font-black text-[var(--page-fg)]">
            {title}
          </h2>
        </div>

        {note && (
          <span className="rounded-full bg-[var(--page-bg)] px-3 py-2 text-xs text-[var(--primary)]">
            {note}
          </span>
        )}
      </div>

      {/* Language Tabs */}
      <div className="mt-7 flex gap-2 border-b border-[var(--border)]">
        {tabs.map((tab) => {
          const isActive = language === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setLanguage(tab.id)}
              className={`border-b-2 px-3 py-3 text-sm font-semibold transition ${
                isActive
                  ? "border-[var(--primary)] text-[var(--primary)]"
                  : "border-transparent text-[var(--muted)] hover:text-[var(--page-fg)]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Lyrics Content */}
      <div className="min-h-64 py-8">
        {language === "original" && (
          <div className="space-y-8">
            {hooliganData.sections.map((section) => (
              <div key={section.id} className="space-y-4">
                {section.lines.map((line, index) => (
                  <div key={`${section.id}-${index}`}>
                    <p className="whitespace-pre-line text-sm leading-8 text-[var(--page-fg)]">
                      {line.original}
                    </p>

                    {line.pronunciation && (
                      <p className="mt-0.5 text-xs leading-6 text-[var(--muted)]">
                        {line.pronunciation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {language === "thai" && (
          <p className="text-sm leading-8 text-[var(--muted)]">
            เพิ่มเนื้อร้องหรือคำแปลภาษาไทยได้ที่นี่
          </p>
        )}

        {language === "english" && (
          <p className="text-sm leading-8 text-[var(--muted)]">
            Add the English translation here.
          </p>
        )}
      </div>

      {/* Footer */}
      <p className="border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
        Lyrics and translations can be added to the song data when available.
      </p>
    </section>
  );
}
