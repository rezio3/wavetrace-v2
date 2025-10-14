import type React from "react";
import "./GlassContainer.scss";

type GlassContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`glass-container w-100 p-3 p-lg-5 ${className}`}>
      {children}
    </div>
  );
};

export default GlassContainer;
