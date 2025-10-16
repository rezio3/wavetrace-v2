import type { MusicItem } from "./musicPageCommon";
import { AudioPlayer, type AudioPlayerRef } from "react-audio-play";
import HeaderText from "../elements/HeaderText";
import PriceText from "../elements/PriceText";
import { Button, Tooltip, tooltipClasses } from "@mui/material";
import "./MusicListItem.scss";
import MutedText from "../elements/MutedText";
import { useEffect, useRef, useState } from "react";
import DialogProceedWindow from "./proceedWindow/DialogProceedWindow";
import MusicTypeBadge from "./MusicTypeBadge";

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
    track.title.length > 28
      ? track.title.slice(0, 25).trimEnd() + "..."
      : track.title;

  const playerRef = useRef<AudioPlayerRef>(null);

  const handleStop = () => {
    playerRef.current?.stop();
  };
  useEffect(() => {
    if (activeTrackId !== track._id) handleStop();
  }, [activeTrackId]);

  const trackTitleComponent = (
    <Tooltip
      title={track.title}
      placement="top"
      disableInteractive
      disableHoverListener={trackTitle === track.title} // show tooltip only when title is not entirely visible
      slotProps={{
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: "0px",
              },
          },
        },
      }}
    >
      <HeaderText headerType="h6" fontSize={16} className="ms-2 music-title">
        {trackTitle}
        <MutedText fontSize={12} className="ms-2 ms-lg-0 artist-span">
          by {track.artist}
        </MutedText>
      </HeaderText>
    </Tooltip>
  );

  const trackTypeComponent = (
    <MusicTypeBadge track={track} className="ms-0 ms-lg-auto align-items-end" />
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
        track={track}
      />
    </li>
  );
};

export default MusicListItem;
