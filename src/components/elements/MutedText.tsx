type MutedTextProps = {
  children: React.ReactNode;
  fontSize?: number;
  className?: string;
  style?: React.CSSProperties;
};

const MutedText: React.FC<MutedTextProps> = ({
  children,
  fontSize = 14,
  className = "",
  style = {},
}) => {
  return (
    <span
      className={`text-secondary ${className}`}
      style={{
        fontSize: fontSize,
        lineHeight: 1.5,
        display: "block",
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default MutedText;
