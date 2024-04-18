import data from "../data";
import { Howl } from "howler";
import { useState } from "react";
import { PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons";

export default function Player() {
  const [currentTrack, setCurrentTrack] = useState("");
  const [currentSound, setCurrentSound] = useState(null);

  return (
    <div className="playerPage">
      <TrackPlayer>
        <TrackControls
          currentTrack={currentTrack}
          currentSound={currentSound}
          tracksArr={data.tracks}
          setCurrentTrack={setCurrentTrack}
          setCurrentSound={setCurrentSound}
        />
      </TrackPlayer>
      <TrackList
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        currentSound={currentSound}
        setCurrentSound={setCurrentSound}
      />
    </div>
  );
}

function TrackPlayer({ children }) {
  return (
    <div className="trackPlayer">
      <div className="trackImage" />
      {children}
    </div>
  );
}

function TrackControls({
  currentTrack,
  currentSound,
  tracksArr,
  setCurrentTrack,
  setCurrentSound,
}) {
  return (
    <div className="controls">
      <div className="buttons">
        <SkipPrevious
          className="button"
          onClick={() => {
            currentSound.stop();
            currentSound.play();
          }}
        />
        <PlayArrow
          className="button"
          onClick={() => {
            if (currentSound.playing()) currentSound.pause();
            else currentSound.play();
            console.log(currentSound.playing());
          }}
        />

        <SkipNext
          className="button"
          onClick={() => {
            if (currentSound != null) currentSound.pause();
            tracksArr.forEach((track, i) => {
              if (track.title == currentTrack) {
                let currentTrackIndex = i;
                let track;
                let newIndex;
                if (currentTrackIndex + 1 == tracksArr.length) newIndex = 0;
                else newIndex = currentTrackIndex + 1;
                setCurrentTrack(tracksArr[newIndex].title);
                track = tracksArr[newIndex];
                playTrack(
                  currentSound,
                  track,
                  setCurrentSound,
                  setCurrentTrack
                );
                return;
              }
            });
          }}
        />
      </div>
      <p className="trackTitle">{currentTrack}</p>
    </div>
  );
}

function TrackList({
  currentTrack,
  setCurrentTrack,
  currentSound,
  setCurrentSound,
}) {
  return (
    <div className="trackList">
      {data.tracks.map((track, i) => (
        <div
          key={"track-" + i}
          className={`trackMini ${
            currentTrack ? (currentTrack == track.title ? "selected" : "") : ""
          }`}
          onClick={() => {
            playTrack(currentSound, track, setCurrentSound, setCurrentTrack);
          }}
        >
          <p>{track.title}</p>
          <p>{track.duration}</p>
        </div>
      ))}
    </div>
  );
}

function playTrack(currentSound, track, setCurrentSound, setCurrentTrack) {
  if (currentSound != null) {
    currentSound.pause();
  }
  let src =
    "../tracks/" + track.title.toLowerCase().replaceAll(" ", "_") + ".mp3";
  let sound = new Howl({
    src: [src],
    html5: true,
    volume: 0.075,
  });
  sound.play();
  setCurrentSound(sound);
  setCurrentTrack(track.title);
}
