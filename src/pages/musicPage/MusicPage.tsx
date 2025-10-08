import GlassCard from "../../components/elements/GlassCard";
import SearchBar from "../../components/elements/SearchBar";
import SectionWrapper from "../../components/SectionWrapper";

const MusicPage = () => {
  return (
    <SectionWrapper className="d-flex flex-column mt-5">
      <div className="d-flex gap-3 flex-wrap justify-content-between">
        {musicFilterBoxes.map((filterBox) => (
          <GlassCard header={filterBox.headerText} transition />
        ))}
      </div>
      <SearchBar />
    </SectionWrapper>
  );
};

export default MusicPage;

const musicFilterBoxes = [
  { headerText: "Orchestral", link: "" },
  { headerText: "Etnic", link: "" },
  { headerText: "Pixel Art", link: "" },
  { headerText: "Lofi", link: "" },
  { headerText: "Electronic", link: "" },
  { headerText: "Epic", link: "" },
];
