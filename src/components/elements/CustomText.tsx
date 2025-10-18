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
  isInnerHtml?: boolean;
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
  // vvvvvv make this prop true if the text coming from the external object/variable
  isInnerHtml,
}) => {
  const Tag = textType;
  let content: React.ReactNode;
  console.log(children);
  if (
    Array.isArray(children) &&
    children.every(
      (c) => typeof c === "string" || c === undefined || c === null
    )
  ) {
    content = children
      .map((c) => (c === undefined || c === null ? "" : c))
      .join("");
  } else {
    content = children;
  }
  return (
    <>
      {isInnerHtml ? (
        <Tag
          className={`${className} `}
          style={{
            fontSize: fontSize,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            letterSpacing: letterSpacing,
            ...style,
          }}
          dangerouslySetInnerHTML={{ __html: content || "" }}
        />
      ) : (
        <Tag
          className={`${className} `}
          style={{
            fontSize: fontSize,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            letterSpacing: letterSpacing,
            ...style,
          }}
        >
          {content}
        </Tag>
      )}
    </>
  );
};

export default CustomText;
