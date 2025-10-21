import { Link } from "react-router-dom";
import HeaderText from "../../elements/HeaderText";
import MutedText from "../../elements/MutedText";
import MusicTypeBadge from "../MusicTypeBadge";
import { urlRouter } from "../../../routes/urlRouter";
import type { MusicItem } from "../musicPageCommon";

type HeaderBuyEditModalProps = {
  track: MusicItem;
};

const HeaderBuyEditModal: React.FC<HeaderBuyEditModalProps> = ({ track }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <HeaderText headerType="h6" fontSize={24} fontWeight={700}>
          {track.title}
        </HeaderText>
        <MusicTypeBadge track={track} className="ms-3" />
      </div>
      <MutedText fontSize={12}>
        by{" "}
        <Link className="tag-a-link no-underscore" to={urlRouter.artistsPage}>
          {track.artist}
        </Link>
      </MutedText>
    </div>
  );
};

export default HeaderBuyEditModal;
