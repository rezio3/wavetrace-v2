import "./SectionWrapper.scss";
type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  height?: number;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  centered = "",
  height,
}) => {
  return (
    <div
      className={`page-wrapper ${className} ${
        centered &&
        "d-flex flex-column align-items-start justify-content-center"
      }`}
      style={{ height: height || "auto" }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
