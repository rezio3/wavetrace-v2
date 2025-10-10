type MutedTextProps = {
  children: React.ReactNode;
  fontSize?: number;
};

const MutedText: React.FC<MutedTextProps> = ({ children, fontSize = 14 }) => {
  return (
    <span
      className="text-secondary"
      style={{ fontSize: fontSize, lineHeight: 1.5, display: "block" }}
    >
      {children}
    </span>
  );
};

export default MutedText;
