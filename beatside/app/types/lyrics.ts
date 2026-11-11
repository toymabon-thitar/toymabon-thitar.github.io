
export interface LyricsLine {
  original: string;
  pronunciation?: string;
}

export interface LyricsSection {
  id: string;
  label: string;
  lines: LyricsLine[];
}

export interface SongLyrics {
  id: string;
  title: string;
  artist: string;
  sections: LyricsSection[];
}