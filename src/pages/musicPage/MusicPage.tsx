import GlassCard from "../../components/elements/GlassCard";
import SearchBar from "../../components/elements/SearchBar";
import MusicList from "../../components/musicPage/MusicList";
import SectionWrapper from "../../components/elements/SectionWrapper";
import Skeleton from "../../components/elements/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../assets/queryKeys";
import {
  getMusicList,
  MUSIC_FILTER_TYPES,
  type MusicListResponse,
} from "../../components/musicPage/musicPageCommon";
import { useEffect, useReducer, useState } from "react";
import Notification from "../../components/elements/Notification";
import { filtersReducer } from "../../components/musicPage/reducer";

const MusicPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, dispatch] = useReducer(filtersReducer, {
    searchFilter: "",
    typeFilter: "",
  });

  const tracksLimitInOnePage = 10;
  const { data, isLoading, isError } = useQuery<MusicListResponse>({
    queryKey: queryKeys.musicPage.musicList(currentPage, filters),
    queryFn: () => getMusicList(currentPage, tracksLimitInOnePage, filters),
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
          {MUSIC_FILTER_TYPES.map((type, index) => (
            <GlassCard
              header={type}
              transition
              key={"filter-box" + type + index}
              dispatch={dispatch}
            />
          ))}
        </div>
        <SearchBar filters={filters} dispatch={dispatch} />
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

// const musicFilterBoxes = [
//   { type: "All" },
//   { type: "Orchestral" },
//   { type: "Electronic" },
//   { type: "Etnic" },
//   { type: "Kids" },
//   { type: "Vocal" },
// ];

// TO DO
// 1. CORS
// 2. DEBOUNCE
// 3. REDUCER
// 4. IP w MongoDB
