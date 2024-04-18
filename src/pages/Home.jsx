import data from "../data";

export default function Home() {
  return (
    <>
      <div className="track trackBanner">
        <p>Title</p>
        <p>Genre</p>
        <p>Duration</p>
      </div>
      {data.tracks.map((track, i) => (
        <div key={"track-" + i} className="track">
          <p>{track.title}</p>
          <p>{track.genre}</p>
          <p>{track.duration}</p>
        </div>
      ))}
    </>
  );
}
