import { AudioPlayer } from "react-audio-play";
import HeaderText from "../../elements/HeaderText";
import MutedText from "../../elements/MutedText";
import type { MusicItem } from "../musicPageCommon";
import MusicTypeBadge from "../MusicTypeBadge";
import CustomText from "../../elements/CustomText";
import { Controller, type Control } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import PriceText from "../../elements/PriceText";
import { Link } from "react-router-dom";
import { urlRouter } from "../../../routes/urlRouter";
import { red } from "@mui/material/colors";
import type { BuyFormData } from "./proceedCommon";

type BuyPanelProps = {
  track: MusicItem;
  control: Control<BuyFormData>;
  isMobile: boolean;
};

const BuyPanel: React.FC<BuyPanelProps> = ({ track, control, isMobile }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="mb-3">
        <div>
          <div className="d-flex align-items-center justify-content-between">
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
        <CustomText fontSize={12} fontWeight={300} className="pb-1">
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
          After payment, you’ll get a download link by email.
        </MutedText>
        <Controller
          name="isAcceptedTermsAndPolicy"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    sx={{
                      color: !!fieldState.error ? red[800] : undefined,
                    }}
                  />
                }
                className="w-auto"
                required
                label={
                  <CustomText className="w-25" fontSize={12} fontWeight={200}>
                    I accept{" "}
                    <Link
                      className="text-reset"
                      to={urlRouter.termsOfService}
                      target="_blank"
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-reset"
                      to={urlRouter.privacyPolicy}
                      target="_blank"
                    >
                      Policy
                    </Link>
                  </CustomText>
                }
              />
            );
          }}
        />
        <div className="d-flex justify-content-between align-items-end mb-1">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Your email"
                variant="outlined"
                error={!!fieldState.error}
                className="mt-1"
                style={{
                  width: isMobile ? "auto" : "100%",
                  maxWidth: isMobile ? "none" : "50%",
                }}
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
