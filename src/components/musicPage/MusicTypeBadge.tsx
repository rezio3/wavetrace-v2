import type React from "react";
import type { MusicItem } from "./musicPageCommon";

type MusicTypeBadgeProps = {
  track: MusicItem;
  className?: string;
};
const MusicTypeBadge: React.FC<MusicTypeBadgeProps> = ({
  track,
  className = "",
}) => {
  return (
    <div
      className={`track-type-container d-flex flex-column align-items-start gap-1 ${className}`}
    >
      {track.type.map((type, index) => (
        <span
          className="track-type-badge d-flex justify-content-center"
          style={{ fontSize: 11, fontWeight: 400 }}
          key={track.title + "-badge-key-" + index}
        >
          {type}
        </span>
      ))}
    </div>
  );
};

export default MusicTypeBadge;
