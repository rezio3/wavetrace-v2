import GlassCard from "../../components/elements/GlassCard";
import SearchBar from "../../components/elements/SearchBar";
import MusicList from "../../components/musicPage/MusicList";
import SectionWrapper from "../../components/SectionWrapper";
import Skeleton from "../../components/elements/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../assets/queryKeys";
import { getTrackList } from "../../components/musicPage/musicPage";

const MusicPage = () => {
  const {
    data: tracks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: queryKeys.musicPage.musicList,
    queryFn: getTrackList,
  });

  return (
    <>
      <SectionWrapper className="d-flex flex-column mt-5">
        <div className="d-flex gap-3 flex-wrap justify-content-between">
          {musicFilterBoxes.map((filterBox) => (
            <GlassCard header={filterBox.headerText} transition />
          ))}
        </div>
        <SearchBar />
        {isLoading ? (
          <Skeleton count={5} height={70} className="mt-2" />
        ) : (
          <>
            {isError ? (
              <h4>Something went wrong. Please try again later.</h4>
            ) : (
              <MusicList tracks={tracks} />
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
