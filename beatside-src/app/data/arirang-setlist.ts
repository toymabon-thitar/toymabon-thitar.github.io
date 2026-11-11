
export type SetlistSong = {
  slug: string;
  title: string;
  note?: string;
};

export type SetlistAct = {
  title: string;
  subtitle: string;
  songs: SetlistSong[];
};

export const arirangActs: SetlistAct[] = [
  {
    title: "ACT 1",
    subtitle: "BTS (한)",
    songs: [
      { slug: "hooligan", title: "Hooligan" },
      { slug: "aliens", title: "Aliens" },
      { slug: "run-bts", title: "Run BTS" },
      { slug: "they-dont-know-bout-us", title: "They Don't Know 'bout Us" },
      { slug: "like-animals", title: "Like Animals" },
      { slug: "fake-love", title: "Fake Love" },
      { slug: "swim", title: "Swim" },
      { slug: "merry-go-round", title: "Merry Go Round" },
    ],
  },
  {
    title: "ACT 2",
    subtitle: "Korea (흥)",
    songs: [
      { slug: "2-0", title: "2.0" },
      { slug: "normal", title: "Normal" },
      { slug: "not-today", title: "Not Today" },
      { slug: "mic-drop", title: "Mic Drop" },
      { slug: "fya", title: "FYA" },
      { slug: "fire", title: "Fire" },
      {
        slug: "body-to-body",
        title: "Body To Body",
        note: "ร้องอารีรังจ้า 🇰🇷",
      },
      {
        slug: "idol",
        title: "IDOL",
        note: "บังทันวนรอบสนาม 💜",
      },
    ],
  },
  {
    title: "ENCORE",
    subtitle: "One more time with ARMY",
    songs: [
      { slug: "come-over", title: "Come Over" },
      { slug: "butter", title: "Butter" },
      { slug: "dynamite", title: "Dynamite" },
      {
        slug: "surprise-song-1",
        title: "Surprise Song 1",
        note: "DJ SPIN THAT SH*T",
      },
      {
        slug: "surprise-song-2",
        title: "Surprise Song 2",
        note: "DJ SPIN THAT SH*T AGAIN",
      },
      { slug: "please", title: "Please" },
      { slug: "into-the-sun", title: "Into The Sun" },
    ],
  },
];

export const allSongs = arirangActs.flatMap((act) => act.songs);

export const spotifyAlbumUrl =
  "https://open.spotify.com/album/3ukkRHDHbN8tNRPKsGZR1h";
