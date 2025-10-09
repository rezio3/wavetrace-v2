import type { MusicItem } from "./musicPageTypes";
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
  return (
    <li
      className="glass-music-item d-flex align-items-center px-4 my-2"
      style={{ height: 70 }}
    >
      <div className="d-flex align-items-center w-50">
        <AudioPlayer
          src={track.audioUrl}
          preload="none"
          className="bg-transparent w-100 text-secondary shadow-none"
        />

        <HeaderText headerType="h6" fontSize={18}>
          {track.title}
        </HeaderText>
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
