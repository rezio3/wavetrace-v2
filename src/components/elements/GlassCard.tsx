import { CardActionArea, CardContent } from "@mui/material";
import HeaderText from "./HeaderText";
import "./GlassCard.scss";
import type {
  FilterAction,
  MusicFilterType,
} from "../musicPage/musicPageCommon";
import type React from "react";

type GlassCardProps = {
  header: MusicFilterType;
  icon?: React.ReactNode;
  height?: number;
  width?: number;
  className?: string;
  transition?: boolean;
  isTextBold?: boolean;
  dispatch: React.Dispatch<FilterAction>;
};

const GlassCard: React.FC<GlassCardProps> = ({
  header,
  icon,
  height = 100,
  width = 200,
  className = "",
  transition,
  isTextBold,
  dispatch,
}) => {
  const CardWrapper: React.ElementType = transition ? CardActionArea : "div";

  return (
    <div
      className={`glass-card position-relative d-flex flex-column justify-content-between ${
        transition && "glass-card-transition"
      } ${className}`}
      style={{ height: height, width: width }}
    >
      <CardWrapper
        className="h-100"
        onClick={() => {
          if (header === "All") {
            dispatch({ type: "RESET" });
          } else {
            dispatch({ type: "SET_TYPE_FILTER", payload: header });
          }
        }}
      >
        <CardContent
          className={`d-flex flex-column justify-content-around align-items-center p-3 h-100`}
        >
          {icon || null}
          <HeaderText
            className="text-uppercase text-center"
            fontFamily="DM Sans, sans-serif"
            fontSize={18}
            fontWeight={isTextBold ? 700 : 400}
          >
            {header}
          </HeaderText>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

export default GlassCard;
