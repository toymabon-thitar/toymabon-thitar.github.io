
import Link from "next/link";
import {
  arirangActs,
  spotifyAlbumUrl,
} from "@/app/data/arirang-setlist";

export default function ArirangSetlist() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] transition-colors duration-200">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-12 md:px-8 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-[300px_1fr]">

          {/* Spotify Album */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="BTS ARIRANG Spotify Album"
              src="https://open.spotify.com/embed/album/3ukkRHDHbN8tNRPKsGZR1h?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block"
            />
          </div>

          {/* Album Information */}
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[var(--primary)]">
              BEATSIDE PRESENTS
            </p>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              ARIRANG
            </h1>

            <p className="mt-3 text-sm font-semibold tracking-[0.2em] text-[var(--muted)]">
              BTS WORLD TOUR
            </p>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">
              Every song, every moment, every memory.
              Relive the ARIRANG concert setlist with ARMY.
            </p>

            <a
              href={spotifyAlbumUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--page-fg)] px-6 py-3 text-sm font-semibold text-[var(--page-bg)] transition hover:bg-[var(--primary)] hover:text-white"
            >
              <span>♫</span>
              Listen on Spotify
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Setlist */}
      <section className="mx-auto max-w-4xl px-5 pb-24 md:px-8">

        {/* Section Heading */}
        <div className="mb-10 flex items-end justify-between border-b border-[var(--border)] pb-4">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--primary)]">
              THE CONCERT
            </p>

            <h2 className="mt-2 text-3xl font-black">
              SETLIST
            </h2>
          </div>

          <p className="text-xs text-[var(--muted)]">
            {arirangActs.reduce(
              (total, act) => total + act.songs.length,
              0
            )}{" "}
            SONGS
          </p>
        </div>

        {/* Acts */}
        <div className="space-y-12">
          {arirangActs.map((act) => (
            <section key={act.title}>

              {/* Act Heading */}
              <div className="mb-5 flex items-center gap-4">
                <div className="h-10 w-1 rounded-full bg-[var(--primary)]" />

                <div>
                  <h3 className="text-xl font-black tracking-wide">
                    {act.title}
                  </h3>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {act.subtitle}
                  </p>
                </div>
              </div>

              {/* Songs */}
              <div className="space-y-2">
                {act.songs.map((song, songIndex) => (
                  <Link
                    key={song.slug}
                    href={`/Arirang/song/${song.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-transparent bg-[var(--surface)] px-4 py-4 transition-all duration-200 hover:border-[var(--primary)]/40 hover:shadow-md md:px-6"
                  >
                    <span className="w-7 text-sm tabular-nums text-[var(--muted)]">
                      {String(songIndex + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold transition group-hover:text-[var(--primary)]">
                        {song.title}
                      </p>

                      {song.note && (
                        <p className="mt-1 text-xs text-[var(--primary)]">
                          {song.note}
                        </p>
                      )}
                    </div>

                    <span className="text-lg text-[var(--muted)] transition group-hover:translate-x-1 group-hover:text-[var(--primary)]">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] px-5 py-8 text-center">
        <p className="text-xs tracking-[0.2em] text-[var(--muted)]">
          MADE WITH LOVE FOR ARMY 💜
        </p>

        <p className="mt-2 text-xs text-[var(--muted)]">
          BEATSIDE · BTS ARIRANG
        </p>
      </footer>
    </main>
  );
}
