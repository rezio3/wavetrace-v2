import type { MusicItem } from "./musicPageCommon";
import { AudioPlayer, type AudioPlayerRef } from "react-audio-play";
import HeaderText from "../elements/HeaderText";
import PriceText from "../elements/PriceText";
import { Button } from "@mui/material";
import "./MusicListItem.scss";
import MutedText from "../elements/MutedText";
import { useEffect, useRef, useState } from "react";
import DialogProceedWindow from "./proceedWindow/DialogProceedWindow";

type MusicListItemProps = {
  track: MusicItem;
  activeTrackId: string | null;
  setActiveTrackId: (id: string | null) => void;
  isMobile: boolean;
};

const MusicListItem: React.FC<MusicListItemProps> = ({
  track,
  activeTrackId,
  setActiveTrackId,
  isMobile,
}) => {
  const [isOpenProceedDialog, setIsOpenProceedDialog] = useState(false);
  const [initialTabInProceedDialog, setInitialTabInProceedDialog] = useState(0);
  const trackTitle =
    track.title.length > 35
      ? track.title.slice(0, 32).trimEnd() + "..."
      : track.title;

  const playerRef = useRef<AudioPlayerRef>(null);
  // const isPlaying = activeTrackId === track._id;
  const handleStop = () => {
    playerRef.current?.stop();
  };
  useEffect(() => {
    if (activeTrackId !== track._id) handleStop();
  }, [activeTrackId]);

  const trackTitleComponent = (
    <HeaderText headerType="h6" fontSize={18} className="ms-2 music-title">
      {trackTitle}
    </HeaderText>
  );
  const trackTypeComponent = (
    <div className="track-type-container d-flex flex-column align-items-end gap-1">
      {track.type.map((type, index) => (
        <span
          className="track-type-badge d-flex justify-content-center"
          style={{ fontSize: 11, fontWeight: 400 }}
          key={trackTitle + "-key-" + index}
        >
          {type}
        </span>
      ))}
    </div>
  );

  return (
    <li
      className="glass-music-item d-flex flex-column flex-lg-row align-items-start align-items-lg-center px-3 my-2 py-3 py-lg-0"
      style={{ height: isMobile ? "auto" : 70 }}
    >
      {isMobile && (
        <div className="d-flex align-items-center justify-content-between w-100">
          {trackTitleComponent}
          {trackTypeComponent}
        </div>
      )}

      <div
        className="d-flex align-items-center"
        style={{ width: isMobile ? "100%" : "50%" }}
      >
        <AudioPlayer
          src={track.audioUrl}
          preload="none"
          className="bg-transparent text-secondary shadow-none px-2"
          style={{ width: isMobile ? "100%" : "50%" }}
          onPlay={() => setActiveTrackId(track._id)}
          ref={playerRef}
        />
        {!isMobile && trackTitleComponent}

        {!isMobile && trackTypeComponent}
      </div>

      <div className="description-container mb-2 mb-lg-0">
        <MutedText fontSize={12}>{track.description}</MutedText>
      </div>
      <div className="d-flex ms-auto gap-2">
        <PriceText>{track.price}</PriceText>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            setInitialTabInProceedDialog(0);
            setIsOpenProceedDialog(true);
          }}
        >
          Buy
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setInitialTabInProceedDialog(1);
            setIsOpenProceedDialog(true);
          }}
        >
          Edit
        </Button>
      </div>
      <DialogProceedWindow
        isOpen={isOpenProceedDialog}
        setIsOpen={setIsOpenProceedDialog}
        initialTab={initialTabInProceedDialog}
        trackId={track._id}
      />
    </li>
  );
};

export default MusicListItem;
