
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { arirangActs } from "@/app/data/arirang-setlist";
import SongLyrics from "@/app/components/arirang/SongLyrics";

const allSongs = arirangActs.flatMap((act) => act.songs);

function SongPageFallback() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] px-5 py-20 text-[var(--page-fg)]">
      <div className="mx-auto max-w-4xl animate-pulse">
        <div className="h-4 w-24 rounded bg-[var(--border)]" />
        <div className="mt-6 h-12 w-64 rounded bg-[var(--border)]" />
        <div className="mt-8 h-64 rounded-2xl bg-[var(--surface)]" />
      </div>
    </main>
  );
}

async function SongContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const song = allSongs.find((item) => item.slug === slug);

  if (!song) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] transition-colors duration-200">
      <section className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-20">
        <a
          href="/Arirang"
          className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          ← Back to Setlist
        </a>

        <div className="mt-10">
          <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary)]">
            BTS WORLD TOUR · ARIRANG
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            {song.title}
          </h1>

          {song.note && (
            <p className="mt-3 text-sm text-[var(--muted)]">
              {song.note}
            </p>
          )}

          <SongLyrics title={song.title} note={song.note} />
        </div>
      </section>
    </main>
  );
}

export default function SongPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<SongPageFallback />}>
      <SongContent params={params} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "hooligan" },
    { slug: "swim" },
    { slug: "normal" },
  ];
}
