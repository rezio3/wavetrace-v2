import GlassCard from "../../components/elements/GlassCard";
import SearchBar from "../../components/elements/SearchBar";
import MusicList from "../../components/musicPage/MusicList";
import SectionWrapper from "../../components/elements/SectionWrapper";
import Skeleton from "../../components/elements/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../assets/queryKeys";
import {
  getTrackList,
  type Filters,
  type MusicListResponse,
} from "../../components/musicPage/musicPageCommon";
import { useEffect, useState } from "react";
import Notification from "../../components/elements/Notification";

const MusicPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    searchFilter: "",
    typeFilter: "",
  });

  const tracksLimitInOnePage = 10;
  const { data, isLoading, isError } = useQuery<MusicListResponse>({
    queryKey: queryKeys.musicPage.musicList(currentPage, filters),
    queryFn: () => getTrackList(currentPage, tracksLimitInOnePage, filters),
  });

  const tracks = data?.tracks || [];
  const totalPages = data?.totalPages || 1;

  const [notifyOpen, setNotifyOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      setNotifyOpen(true);
    }
  }, [isError]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <>
      <SectionWrapper className="d-flex flex-column mt-5">
        <div className="d-flex gap-3 flex-wrap justify-content-between">
          {musicFilterBoxes.map((filterBox, index) => (
            <GlassCard
              header={filterBox.headerText}
              transition
              key={"filter-box" + filterBox.headerText + index}
              setFilters={setFilters}
            />
          ))}
        </div>
        <SearchBar filters={filters} setFilters={setFilters} />
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
                  alert="Error loading tracks."
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
  { headerText: "All", link: "" },
  { headerText: "Orchestral", link: "" },
  { headerText: "Electronic", link: "" },
  { headerText: "Etnic", link: "" },
  { headerText: "Kids", link: "" },
  { headerText: "Vocal", link: "" },
];
