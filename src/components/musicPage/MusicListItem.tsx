import type { MusicItem } from "./musicPageCommon";
import { AudioPlayer } from "react-audio-play";
import HeaderText from "../HeaderText";
import PriceText from "../elements/PriceText";
import { Button } from "@mui/material";
import "./MusicListItem.scss";
import MutedText from "../elements/MutedText";

type MusicListItemProps = {
  track: MusicItem;
  className?: string;
};

const MusicListItem: React.FC<MusicListItemProps> = ({ track }) => {
  const trackTitle =
    track.title.length > 35
      ? track.title.slice(0, 32).trimEnd() + "..."
      : track.title;
  return (
    <li
      className="glass-music-item d-flex align-items-center px-3 my-2"
      style={{ height: 70 }}
    >
      <div className="d-flex align-items-center w-50">
        <AudioPlayer
          src={track.audioUrl}
          preload="none"
          className="bg-transparent w-50 text-secondary shadow-none px-2"
        />

        <HeaderText headerType="h6" fontSize={18} className="ms-2 music-title">
          {trackTitle}
        </HeaderText>
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
      </div>
      <div className="description-container">
        <MutedText fontSize={12}>{track.description}</MutedText>
      </div>
      <div className="d-flex ms-auto gap-2">
        <PriceText>{track.price}</PriceText>
        <Button variant="outlined" color="success">
          Collect
        </Button>
        <Button variant="outlined" color="primary">
          Edit
        </Button>
      </div>
    </li>
  );
};

export default MusicListItem;
