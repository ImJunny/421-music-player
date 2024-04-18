let data = { tracks: [] };

function addTrack(title, genre, duration) {
  data.tracks.push({ title: title, genre: genre, duration });
}

addTrack("Sergio's Magic Dustbin", "Soundtrack", "2:31");
addTrack("Mesmerizing Galaxy", "Electronica", "1:32");
addTrack("Lord of the Rangs", "World", "2:34");
addTrack("Galactic Rap", "Electronica", "2:22");
addTrack("Equatorial Complex", "Electronica", "3:00");

export default data;
