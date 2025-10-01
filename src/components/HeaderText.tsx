type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type HeaderTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeaderTextProps = {
  children: React.ReactNode;
  className?: string;
  fontSize?: number;
  fontFamily?: "Carlito";
  fontWeight?: FontWeight;
  letterSpacing?: number;
  headerType?: HeaderTag;
};

const HeaderText: React.FC<HeaderTextProps> = ({
  children,
  className,
  fontSize = 45,
  fontFamily = "Carlito",
  fontWeight = 400,
  letterSpacing = 1,
  headerType = "h2",
}) => {
  const Tag = headerType;
  return (
    <Tag
      className={`${className}`}
      style={{
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        letterSpacing: letterSpacing,
      }}
    >
      {children}
    </Tag>
  );
};

export default HeaderText;
