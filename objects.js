const playlist = {
  "Jimmi Hendrix": "Purple Haze"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
