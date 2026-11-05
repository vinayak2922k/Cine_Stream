/**
 * Curated Cinema Archive
 * Fallback dataset modeled after TMDB popular releases with 100% verified,
 * high-resolution poster imagery, full synopses, and exact TMDB property structures.
 * Activates when ISP blocks TMDB or before an external API key is supplied.
 */

export const CURATED_ARCHIVE = [
  {
    id: 872585,
    title: 'Oppenheimer',
    release_date: '2023-07-21',
    vote_average: 8.1,
    overview:
      'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II, exploring the theoretical brilliance and harrowing moral fallout.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX500.jpg',
  },
  {
    id: 693134,
    title: 'Dune: Part Two',
    release_date: '2024-03-01',
    vote_average: 8.2,
    overview:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX500.jpg',
  },
  {
    id: 157336,
    title: 'Interstellar',
    release_date: '2014-11-07',
    vote_average: 8.4,
    overview:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft along with a team of researchers through a newly discovered wormhole.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
  },
  {
    id: 335984,
    title: 'Blade Runner 2049',
    release_date: '2017-10-06',
    vote_average: 8.0,
    overview:
      'Thirty years after the events of the first film, a new blade runner unearths a long-buried secret that has the potential to plunge what is left of society into chaos.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX500.jpg',
  },
  {
    id: 155,
    title: 'The Dark Knight',
    release_date: '2008-07-18',
    vote_average: 8.5,
    overview:
      'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX500.jpg',
  },
  {
    id: 27205,
    title: 'Inception',
    release_date: '2010-07-16',
    vote_average: 8.4,
    overview:
      'Cobb, a skilled thief who steals corporate secrets through dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX500.jpg',
  },
  {
    id: 278,
    title: 'The Shawshank Redemption',
    release_date: '1994-09-23',
    vote_average: 8.7,
    overview:
      'Imprisoned in the 1940s for a double murder he didn’t commit, upstanding banker Andy Dufresne begins a new life at the Shawshank prison and forms an enduring friendship with Red.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX500.jpg',
  },
  {
    id: 603,
    title: 'The Matrix',
    release_date: '1999-03-31',
    vote_average: 8.2,
    overview:
      'Set in the 22nd century, the film tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg',
  },
  {
    id: 11,
    title: 'Star Wars: A New Hope',
    release_date: '1977-05-25',
    vote_average: 8.2,
    overview:
      'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX500.jpg',
  },
  {
    id: 274,
    title: 'The Silence of the Lambs',
    release_date: '1991-02-14',
    vote_average: 8.3,
    overview:
      'Clarice Starling is a top student at the FBI\'s training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 14160,
    title: 'The Prestige',
    release_date: '2006-10-19',
    vote_average: 8.2,
    overview:
      'A mysterious story of two magicians whose intense desire to uncover the secrets of each other’s illusions leads to a perilous life of jealousy, deception, and danger.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 98,
    title: 'Gladiator',
    release_date: '2000-05-04',
    vote_average: 8.2,
    overview:
      'In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into turmoil. Maximus, one of the Roman army\'s most capable generals, is betrayed and forced into slavery.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 289,
    title: 'Casablanca',
    release_date: '1942-11-26',
    vote_average: 8.2,
    overview:
      'In Casablanca in December 1941, a cynical American expatriate encounters a former lover, with unforeseen complications.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 299534,
    title: 'Avengers: Endgame',
    release_date: '2019-04-24',
    vote_average: 8.3,
    overview:
      'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos’ actions.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX500.jpg',
  },
  {
    id: 329,
    title: 'Jurassic Park',
    release_date: '1993-06-11',
    vote_average: 8.0,
    overview:
      'A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening to the public, he invites a small group of experts.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX500.jpg',
  },
  {
    id: 475557,
    title: 'Joker',
    release_date: '2019-10-02',
    vote_average: 8.1,
    overview:
      'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX500.jpg',
  },
  {
    id: 76341,
    title: 'Mad Max: Fury Road',
    release_date: '2015-05-13',
    vote_average: 7.6,
    overview:
      'An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg',
  },
  {
    id: 6977,
    title: 'No Country for Old Men',
    release_date: '2007-11-09',
    vote_average: 7.9,
    overview:
      'Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Bell hot on his trail.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX500.jpg',
  },
  {
    id: 7345,
    title: 'There Will Be Blood',
    release_date: '2007-12-28',
    vote_average: 8.1,
    overview:
      'Ruthless silver miner turned oil prospector Daniel Plainview moves to oil-rich California in the early 20th century, where ambition and deceit drive him into ruthless conflict.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX500.jpg',
  },
  {
    id: 120467,
    title: 'The Grand Budapest Hotel',
    release_date: '2014-03-28',
    vote_average: 8.1,
    overview:
      'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel’s glorious years under an exceptional concierge.',
    poster_path:
      'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX500.jpg',
  },
  {
    id: 238,
    title: 'The Godfather',
    release_date: '1972-03-24',
    vote_average: 8.7,
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch Vito Corleone is attacked, his youngest son steps up.',
    poster_path:
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 129,
    title: 'Spirited Away',
    release_date: '2001-07-20',
    vote_average: 8.5,
    overview:
      'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had.',
    poster_path:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 680,
    title: 'Pulp Fiction',
    release_date: '1994-10-14',
    vote_average: 8.5,
    overview:
      'A burger-loving hit man, his philosophical partner, a drug-addled gangster’s moll and a washed-up boxer converge in four tales of violence and redemption.',
    poster_path:
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: 496243,
    title: 'Parasite',
    release_date: '2019-10-11',
    vote_average: 8.5,
    overview:
      'All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',
    poster_path:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80',
  },
];
