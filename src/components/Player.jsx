import { useState, useEffect, useContext } from "react";
import { Songs } from "./Context/Context";

import clsx from "clsx";
import {
  PlayerDetails,
  ReferIcon,
  Section,
  SectionBody,
  PlayerControls,
  FakeOptionMucsicList,
  data2,
} from "../common";

const Player = () => {
  const { dataSongs, song, setSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const [active, setActive] = useState(0);
  const obj = {
    data: [...data2],
  };
  const handleSetSong = (idSong) => {
    let song = dataSongs.find((song) => song.id === idSong);
    if (!song) {
      setSong(dataSongs[0]);
    } else {
      setSong(song);
    }
  };
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };
  const handleNextSong = () => {
    handleSetSong(song.id + 1);
    setIdSong(song.id + 1);
  };
  const handlePrevSong = () => {
    handleSetSong(song.id - 1);
    if (idSong === 0) setIdSong(0);
    else setIdSong(song.id - 1);
  };
  const handleNext = (type = false) => {
    type === true ? handleNextSong() : (type = false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dataSongs]);

  return (
    <Section>
      <SectionBody>
        <div className="player-wrapper">
          <div className="player-wrapper__container">
            <div className="player-wrapper__container__header">
              <div className="level tab-bars">
                <div className="level-left">
                  {FakeOptionMucsicList.map((item, id) => (
                    <div
                      className={clsx(
                        `level-item`,
                        `${active === item.id ? "is-active" : ""}`
                      )}
                      onClick={() => setActive(item.id)}
                      key={id}
                    >
                      <h6>{item.name}</h6>
                    </div>
                  ))}
                </div>
                <div className="level-right">
                  <ReferIcon {...obj} />
                </div>
              </div>
            </div>
            <div className="player-queue__scroll">
              <PlayerDetails
                songs={dataSongs}
                idSong={idSong}
                song={song}
                handlePlaySong={handlePlaySong}
              />
            </div>
          </div>
        </div>
        <div className="player-controls">
          <PlayerControls
            song={song}
            handleNext={handleNext}
            handleNextSong={handleNextSong}
            handlePrevSong={handlePrevSong}
          />
        </div>
        <audio />
      </SectionBody>
    </Section>
  );
};

export default Player;
