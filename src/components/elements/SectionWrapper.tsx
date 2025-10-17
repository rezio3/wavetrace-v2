import "./SectionWrapper.scss";
type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  height?: number;
  style?: {};
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  centered = "",
  height,
  style,
}) => {
  return (
    <div
      className={`page-wrapper ${className} ${
        centered &&
        "d-flex flex-column align-items-start justify-content-center"
      }`}
      style={{ height: height || "auto", ...style }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
