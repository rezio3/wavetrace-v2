import GlassContainer from "../elements/GlassContainer";
import ImageItem from "../elements/ImageItem";

import HeaderText from "../elements/HeaderText";
import CustomText from "../elements/CustomText";
import { Button } from "@mui/material";
import type { Artist } from "./artists";
import { Link } from "react-router-dom";
import { urlRouter } from "../../routes/urlRouter";

type ArtistItemProps = {
  rightSide: boolean;
  artist: Artist;
};

const ArtistItem: React.FC<ArtistItemProps> = ({ rightSide, artist }) => {
  return (
    <GlassContainer
      noPadding
      className={`d-flex mb-4 ${rightSide && "flex-row-reverse"} `}
    >
      <ImageItem src={artist.img} width={300} height={"100%"} />
      <div
        className="px-5 py-4 w-100 d-flex flex-column align-items-start"
        style={{ minHeight: 330 }}
      >
        <HeaderText headerType="h4" fontSize={36} className="mb-2 mt-2">
          {artist.name}
        </HeaderText>
        <CustomText fontSize={16} fontWeight={300}>
          {artist.description}
        </CustomText>
        <Button
          variant="contained"
          className="mt-auto mb-2"
          component={Link}
          to={`${urlRouter.musicPage}?artist=${encodeURIComponent(
            artist.name
          )}`}
        >
          View Music
        </Button>
      </div>
    </GlassContainer>
  );
};

export default ArtistItem;
