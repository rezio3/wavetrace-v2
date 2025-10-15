import { AudioPlayer } from "react-audio-play";
import HeaderText from "../../elements/HeaderText";
import MutedText from "../../elements/MutedText";
import type { MusicItem } from "../musicPageCommon";
import MusicTypeBadge from "../MusicTypeBadge";
import CustomText from "../../elements/CustomText";
import { Controller, type Control } from "react-hook-form";
import { TextField } from "@mui/material";
import PriceText from "../../elements/PriceText";

type BuyPanelProps = {
  track: MusicItem;
  control: Control<any>;
  isMobile: boolean;
};

const BuyPanel: React.FC<BuyPanelProps> = ({ track, control, isMobile }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <div>
          <div className="d-flex align-items-center ">
            <HeaderText headerType="h6" fontSize={24} fontWeight={700}>
              {track.title}
            </HeaderText>
            <MusicTypeBadge track={track} className="ms-3" />
          </div>
          <MutedText fontSize={12}>by {track.artist}</MutedText>
        </div>

        <AudioPlayer
          src={track.audioUrl}
          preload="none"
          className="bg-transparent text-secondary shadow-none px-2"
          style={{ width: "100%" }}
        />
        <CustomText
          fontSize={12}
          fontWeight={300}
          className="pb-1"
          style={{
            maxHeight: 100,
            overflowX: "auto",
          }}
        >
          {track.description}
        </CustomText>
      </div>

      <div className="w-100">
        <div
          className="mb-2"
          style={{ borderBottom: "1px solid rgba(78, 78, 78, 0.484)" }}
        />
        <MutedText
          fontSize={12}
          className="mt-1"
          style={{ width: isMobile ? "100%" : "50%" }}
        >
          After payment, you’ll get a download link on the website and by email.
        </MutedText>
        <div className="d-flex justify-content-between">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Your email"
                variant="outlined"
                error={!!fieldState.error}
                className="w-50 mt-2"
                size="small"
              />
            )}
          />
          <PriceText fontSize={22} className={"price-in-proceed-window"}>
            {track.price}
          </PriceText>
        </div>
      </div>
    </div>
  );
};

export default BuyPanel;
