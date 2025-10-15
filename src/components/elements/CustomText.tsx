type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type TextTag = "span" | "p";

type HeaderTextProps = {
  children: React.ReactNode;
  className?: string;
  fontSize?: number;
  fontFamily?: "Carlito" | "Roboto, sans-serif" | "DM Sans, sans-serif";
  fontWeight?: FontWeight;
  letterSpacing?: number;
  textType?: TextTag;
  style?: React.CSSProperties;
};

const CustomText: React.FC<HeaderTextProps> = ({
  children,
  className = "",
  fontSize = 18,
  fontFamily = "Roboto, sans-serif",
  fontWeight = 400,
  letterSpacing = 1,
  textType = "span",
  style = {},
}) => {
  const Tag = textType;
  return (
    <Tag
      className={`m-0 ${className} `}
      style={{
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        letterSpacing: letterSpacing,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

export default CustomText;
