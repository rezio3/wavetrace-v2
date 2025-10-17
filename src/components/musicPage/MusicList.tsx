import { Pagination, Stack } from "@mui/material";
import MusicListItem from "./MusicListItem";
import type { MusicItem } from "./musicPageCommon";
import { useState } from "react";
import CustomText from "../elements/CustomText";

type MusicListProps = {
  tracks: MusicItem[];
  page: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalPages: number;
  isMobile: boolean;
};

const MusicList: React.FC<MusicListProps> = ({
  tracks,
  page,
  onPageChange,
  totalPages,
  isMobile,
}) => {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);

  return (
    <>
      <ul className="list-unstyled p-0">
        {tracks.map((track, index) => (
          <MusicListItem
            track={track}
            activeTrackId={activeTrackId}
            setActiveTrackId={setActiveTrackId}
            key={track.title + index}
            isMobile={isMobile}
          />
        ))}
      </ul>
      <div className="d-flex flex-column align-items-center">
        {tracks.length === 0 && (
          <CustomText fontSize={35} className="text-secondary mb-5">
            Nothing matched your search
          </CustomText>
        )}
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
