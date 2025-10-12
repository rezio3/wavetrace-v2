import { Pagination, Stack } from "@mui/material";
import MusicListItem from "./MusicListItem";
import type { MusicItem } from "./musicPageCommon";
import { useEffect, useState } from "react";

type MusicListProps = {
  tracks: MusicItem[];
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalPages: number;
};

const MusicList: React.FC<MusicListProps> = ({
  tracks,
  page,
  onPageChange,
  totalPages,
}) => {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  useEffect(() => {
    console.log(activeTrackId);
  }, [activeTrackId]);
  return (
    <>
      <ul className="list-unstyled p-0">
        {tracks.map((track, index) => (
          <MusicListItem
            track={track}
            activeTrackId={activeTrackId}
            setActiveTrackId={setActiveTrackId}
            key={track.title + index}
          />
        ))}
      </ul>
      <div className="d-flex justify-content-center">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            size="large"
            page={page}
            onChange={onPageChange}
          />
        </Stack>
      </div>
    </>
  );
};

export default MusicList;
