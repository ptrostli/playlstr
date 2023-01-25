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
  user: user_1,
  vibe: "Party"
)

playlist_2 = Playlist.create(
  title: "In The Matrix",
  description: "Music to code to. Mix of lofi beats, electronic, jazz.",
  user: user_2,
  vibe: "Work"
)

playlist_3 = Playlist.create(
  title: "Sad Boi Vibes",
  description: "For when you're just feeling sad and need to be a sad boi.",
  user: user_2,
  vibe: "Love"
)

track_1 = Track.create(
  name: "10:35",
  artist: "Tiesto ft. Tate McRae",
  album: "10:35",
  length: 172000,
  external_url: "https://open.spotify.com/track/6BePGk3eCan4FqaW2X8Qy3",
  preview_url: "https://p.scdn.co/mp3-preview/bb66baefdcf078f0a1f9b99b60b71933de394d5e?cid=a9b02aefeb5f4fba8796911337e2713b",
  image: "https://i.scdn.co/image/ab67616d00004851999565cd8bea3f8f0985bb31",
  uri: "spotify:track:6BePGk3eCan4FqaW2X8Qy3",
  playlist: playlist_1
)

track_2 = Track.create(
  name: "Drift",
  artist: "Syn Cole",
  album: "Drift",
  length: 165000,
  external_url: "https://open.spotify.com/track/1nN4hImiv5VUApR5bnqrvS",
  preview_url: "https://p.scdn.co/mp3-preview/df1405dc34485b6414bc785a868b2b36c9315bee?cid=a9b02aefeb5f4fba8796911337e2713b",
  image: "https://i.scdn.co/image/ab67616d0000485179e8cef820ce1c336a243aca",
  uri: "spotify:track:1nN4hImiv5VUApR5bnqrvS",
  playlist: playlist_1
)

track_3 = Track.create(
  name: "September",
  artist: "James Arthur",
  album: "September (MENTIS Remix)",
  length: 220000,
  external_url: "https://open.spotify.com/track/7uxB3OyeNw5OMxLHJOLE7F",
  preview_url: "https://p.scdn.co/mp3-preview/9c4955f3b357104bd0f24092e537b2b9b2b31eb6?cid=a9b02aefeb5f4fba8796911337e2713b",
  image: "https://i.scdn.co/image/ab67616d00004851f1c4d8e729aa649891551ccd",
  uri: "spotify:track:7uxB3OyeNw5OMxLHJOLE7F",
  playlist: playlist_2
)

track_4 = Track.create(
  name: "A Moment Apart",
  artist: "ODESZA",
  album: "A Moment Apart",
  length: 234000,
  external_url: "https://open.spotify.com/track/59wlTaYOL5tDUgXnbBQ3my",
  preview_url: "https://p.scdn.co/mp3-preview/c03f6285f56299463246c4a7a40969cc8169bc7e?cid=a9b02aefeb5f4fba8796911337e2713b",
  image: "https://i.scdn.co/image/ab67616d0000485199a3a1c380019cdc2ba9b8c2",
  uri: "spotify:track:59wlTaYOL5tDUgXnbBQ3my",
  playlist: playlist_2
)

track_5 = Track.create(
  name: "Sweet Disaster",
  artist: "DREAMERS",
  album: "This Album Does Not Exist",
  length: 305010,
  external_url: "https://open.spotify.com/track/7bEDDsy2LFC0KSqhZp5nPE",
  preview_url: "https://p.scdn.co/mp3-preview/64cf9946dac78c018464cc47b0a11afa411564e6?cid=a9b02aefeb5f4fba8796911337e2713b",
  image: "https://i.scdn.co/image/ab67616d000048513035f006f639105b154a939d",
  uri: "spotify:track:7bEDDsy2LFC0KSqhZp5nPE",
  playlist: playlist_3
)

track_6 = Track.create(
  name: "Will Do",
  artist: "TV On The Radio",
  album: "Nine Types of Light",
  length: 325000,
  external_url: "https://open.spotify.com/track/5iHK8VI9XkJJdXQHCBXeM4",
  preview_url: "https://p.scdn.co/mp3-preview/f5211740488ccd62068bb6d57359b8bf7dab4319?cid=a9b02aefeb5f4fba8796911337e2713b",
  image: "https://i.scdn.co/image/ab67616d00004851236e058ccdf0522208cc8397",
  uri: "spotify:track:5iHK8VI9XkJJdXQHCBXeM4",
  playlist: playlist_3
)

track_7 = Track.create(
  name: "Saturday Nights REMIX",
  artist: "Khalid, Kane Brown",
  album: "Saturday Nights REMIX",
  length: 221000,
  external_url: "https://open.spotify.com/track/0W5oXFrxZNBTIS1eMW9Ofz",
  preview_url: "https://p.scdn.co/mp3-preview/09545aad417ecd81717cc5d8dd12fea3e6261a9b?cid=a9b02aefeb5f4fba8796911337e2713b",
  image: "https://i.scdn.co/image/ab67616d00004851c0263605a6e068d04557b177",
  uri: "spotify:track:0W5oXFrxZNBTIS1eMW9Ofz",
  playlist: playlist_3
)