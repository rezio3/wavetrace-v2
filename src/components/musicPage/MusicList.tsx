import MusicListItem from "./MusicListItem";
import type { MusicItem } from "./musicPageTypes";

type MusicListProps = {
  tracks: MusicItem[];
};

const MusicList: React.FC<MusicListProps> = ({ tracks }) => {
  return (
    <ul className="list-unstyled p-0">
      {tracks.map((track) => (
        <MusicListItem track={track} />
      ))}
    </ul>
  );
};

export default MusicList;
