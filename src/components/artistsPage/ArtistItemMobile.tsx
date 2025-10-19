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

const ArtistItemMobile: React.FC<ArtistItemProps> = ({ rightSide, artist }) => {
  return (
    <GlassContainer noPadding className={`d-flex mb-4 flex-column`}>
      <div className={`d-flex h-100 ${rightSide && "flex-row-reverse"} `}>
        <ImageItem src={artist.img} width={160} height={"100%"} />
        <div className="w-100 d-flex justify-content-center align-items-center">
          <HeaderText
            headerType="h4"
            fontSize={28}
            className={`mb-2 p-4 text-center`}
          >
            {artist.name}
          </HeaderText>
        </div>
      </div>
      <div className="p-4 w-100 d-flex flex-column align-items-center">
        <CustomText fontSize={14} fontWeight={300}>
          {artist.description}
        </CustomText>
        <Button
          variant="contained"
          className="mt-4"
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

export default ArtistItemMobile;
