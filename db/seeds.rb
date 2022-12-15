User.destroy_all
Playlist.destroy_all
Track.destroy_all

user_1 = User.create(
  username: "demo",
  email: "demo@email.com",
  password: "password",
  role: "user"
)

user_2 = User.create(
  username: "phil",
  email: "phil@email.com",
  password: "password",
  role: "admin"
)

playlist_1 = Playlist.create(
  title: "Beats To Blast!",
  description: "Popular music for hanging out.",
  user: user_1
)

playlist_2 = Playlist.create(
  title: "In The Matrix",
  description: "Music to code to. Mix of lofi beats, electronic, jazz.",
  user: user_2
)

playlist_3 = Playlist.create(
  title: "Sad Boi Vibes",
  description: "For when you're just feeling sad and need to be a sad boi.",
  user: user_2
)

track_1 = Track.create(
  name: "10:35",
  artist: "Tiesto ft. Tate McRae",
  album: "10:35",
  length: 172000,
  playlist: playlist_1
)

track_2 = Track.create(
  name: "Drift",
  artist: "Syn Cole",
  album: "Drift",
  length: 165000,
  playlist: playlist_1
)

track_3 = Track.create(
  name: "September",
  artist: "James Arthur",
  album: "September (MENTIS Remix)",
  length: 220000,
  playlist: playlist_2
)

track_4 = Track.create(
  name: "A Moment Apart",
  artist: "ODESZA",
  album: "A Moment Apart",
  length: 234000,
  playlist: playlist_2
)

track_5 = Track.create(
  name: "Sweet Disaster",
  artist: "DREAMERS",
  album: "This Album Does Not Exist",
  length: 305010,
  playlist: playlist_3
)

track_6 = Track.create(
  name: "Will Do",
  artist: "TV On The Radio",
  album: "Nine Types of Light",
  length: 325000,
  playlist: playlist_3
)

track_7 = Track.create(
  name: "Saturday Nights REMIX",
  artist: "Khalid, Kane Brown",
  album: "Saturday Nights REMIX",
  length: 221000,
  playlist: playlist_3
)