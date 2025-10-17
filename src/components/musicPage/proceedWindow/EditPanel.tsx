import { AudioPlayer } from "react-audio-play";
import HeaderText from "../../elements/HeaderText";
import MutedText from "../../elements/MutedText";
import type { MusicItem } from "../musicPageCommon";
import MusicTypeBadge from "../MusicTypeBadge";
import CustomText from "../../elements/CustomText";
import { Controller, type Control } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { urlRouter } from "../../../routes/urlRouter";
import { red } from "@mui/material/colors";
import type { BuyOrEditFormData } from "./proceedCommon";
import { validateEmail } from "../../../assets/validation";

type BuyPanelProps = {
  track: MusicItem;
  control: Control<BuyOrEditFormData>;
  isMobile: boolean;
};

const EditPanel: React.FC<BuyPanelProps> = ({ track, control, isMobile }) => {
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
      </div>

      <div className="w-100">
        <Controller
          name="message"
          control={control}
          rules={{
            required: "Please tell us what you need",
            minLength: {
              value: 1,
              message: "Message should be at least 10 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label={"What would you like to change?"}
              variant="outlined"
              multiline
              rows={3}
              className="w-100"
              error={!!fieldState.error}
              size="small"
            />
          )}
        />
        <div className="mb-2" />

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
                    checked={field.value}
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
            rules={{
              required: true,
              validate: (value) => validateEmail(value),
            }}
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
          <CustomText
            fontSize={22}
            className={"price-and-edit-in-proceed-window pe-0 pe-lg-1"}
          >
            Edit
          </CustomText>
        </div>
      </div>
    </div>
  );
};

export default EditPanel;
