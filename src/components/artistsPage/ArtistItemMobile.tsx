import GlassContainer from "../elements/GlassContainer";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Artist } from "./artists";
import { urlRouter } from "../../routes/urlRouter";
import { Link } from "react-router-dom";

type ArtistItemProps = {
  rightSide: boolean;
  artist: Artist;
};

const ArtistItemMobile: React.FC<ArtistItemProps> = ({ artist }) => {
  return (
    <GlassContainer noPadding className={`d-flex mb-4 flex-column`}>
      <CardMedia
        component="img"
        sx={{
          height: 240,
          objectPosition: "50% 40%", // 👈 pokazuje górną część zdjęcia
          objectFit: "cover", // zachowuje proporcje i przycina
        }}
        image={artist.img}
        title="green iguana"
      />
      <CardContent className="p-4 pb-4">
        <Typography gutterBottom variant="h5" component="div">
          {artist.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {artist.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="p-3 pt-0"
          size="small"
          component={Link}
          to={`${urlRouter.musicPage}?artist=${encodeURIComponent(
            artist.name
          )}`}
        >
          View music
        </Button>
      </CardActions>
    </GlassContainer>
  );
};

export default ArtistItemMobile;
