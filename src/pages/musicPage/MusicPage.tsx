import GlassCard from "../../components/elements/GlassCard";
import SearchBar from "../../components/elements/SearchBar";
import MusicList from "../../components/musicPage/MusicList";
import SectionWrapper from "../../components/SectionWrapper";
import Skeleton from "../../components/elements/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../assets/queryKeys";
import { getTrackList } from "../../components/musicPage/musicPage";
import { useEffect, useState } from "react";
import Notification from "../../components/elements/Notification";

const MusicPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tracksLimitInOnePage = 10;
  const { data, isLoading, isError } = useQuery({
    queryKey: queryKeys.musicPage.musicList(currentPage),
    queryFn: () => getTrackList(currentPage, tracksLimitInOnePage),
  });

  const tracks = data?.tracks || [];
  const totalPages = data?.totalPages || 1;

  const [notifyOpen, setNotifyOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      setNotifyOpen(true);
    }
  }, [isError]);

  return (
    <>
      <SectionWrapper className="d-flex flex-column mt-5">
        <div className="d-flex gap-3 flex-wrap justify-content-between">
          {musicFilterBoxes.map((filterBox, index) => (
            <GlassCard
              header={filterBox.headerText}
              transition
              key={"filter-box" + filterBox.headerText + index}
            />
          ))}
        </div>
        <SearchBar />
        {isLoading ? (
          <Skeleton count={5} height={70} className="mt-2" />
        ) : (
          <>
            {isError ? (
              <>
                <span className="mt-3 fs-4">
                  Something went wrong. Please try again later.
                </span>
                <Notification
                  type="error"
                  alert="Error downloading tracks."
                  open={notifyOpen}
                  setOpen={setNotifyOpen}
                />
              </>
            ) : (
              <MusicList
                tracks={tracks}
                page={currentPage}
                onPageChange={(_e, value: number) => setCurrentPage(value)}
                totalPages={totalPages}
              />
            )}
          </>
        )}
      </SectionWrapper>
    </>
  );
};

export default MusicPage;

const musicFilterBoxes = [
  { headerText: "New", link: "" },
  { headerText: "Orchestral", link: "" },
  { headerText: "Electronic", link: "" },
  { headerText: "Pixel art", link: "" },
  { headerText: "Etnic", link: "" },
  { headerText: "Lo-Fi", link: "" },
];
