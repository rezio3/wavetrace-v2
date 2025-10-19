import { useWindowSize } from "react-use";
import ArtistItem from "../../components/artistsPage/ArtistItem";
import { artists } from "../../components/artistsPage/artists";
import CustomText from "../../components/elements/CustomText";
import HeaderText from "../../components/elements/HeaderText";
import SectionWrapper from "../../components/elements/SectionWrapper";
import ArtistItemMobile from "../../components/artistsPage/ArtistItemMobile";

const ArtistsPage = () => {
  const { width } = useWindowSize();
  const isMobile = width < 992;
  return (
    <SectionWrapper className="flex-column align-items-center gap-3">
      <HeaderText
        headerType="h2"
        fontSize={40}
        fontFamily="Carlito"
        fontWeight={700}
        letterSpacing={3}
        className="mt-5 text-center"
      >
        Artists
      </HeaderText>
      <CustomText
        fontWeight={300}
        fontSize={22}
        fontFamily={"Roboto, sans-serif"}
        className="text-center"
        // isInnerHtml
      >
        <strong
          style={{ fontWeight: 200, fontFamily: "Roboto, sans-serif" }}
        ></strong>{" "}
        Meet our team of artists, composers, and music producers
      </CustomText>
      <CustomText
        fontWeight={100}
        fontSize={16}
        fontFamily={"Roboto, sans-serif"}
        className="text-center mb-5"
      >
        Professionals dedicated to their craft
      </CustomText>
      {artists.map((artist, index) => {
        const isEvenElement = (index + 1) % 2 === 0;
        return (
          <>
            {isMobile ? (
              <ArtistItemMobile
                artist={artist}
                key={artist.name + index}
                rightSide={isEvenElement}
              />
            ) : (
              <ArtistItem
                artist={artist}
                key={artist.name + index}
                rightSide={isEvenElement}
              />
            )}
          </>
        );
      })}
    </SectionWrapper>
  );
};

export default ArtistsPage;
