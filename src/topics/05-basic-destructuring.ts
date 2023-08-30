interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

// const song = 'New Song';

// const { song: anotherSong, songDuration, details } = audioPlayer;

// const { author, year} = details

// console.log('Song: ' + song, anotherSong, songDuration, author, year);

const [, , trunks]: string[] = ["Goku", "Vegeta", "Trunks"];

// console.log('Personaje 3', dbz[3] ||'No hay personaje en el indice');

console.log(trunks);

export {};
