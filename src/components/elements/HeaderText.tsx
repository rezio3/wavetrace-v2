import React from "react";

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type HeaderTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeaderTextProps = {
  children: React.ReactNode;
  className?: string;
  fontSize?: number;
  fontFamily?: "Carlito" | "Roboto, sans-serif" | "DM Sans, sans-serif";
  fontWeight?: FontWeight;
  letterSpacing?: number;
  headerType?: HeaderTag;
  width?: string;
  isInnerHtml?: boolean;
};

const HeaderText = React.forwardRef<HTMLHeadingElement, HeaderTextProps>(
  (
    {
      children,
      className = "",
      fontSize = 45,
      fontFamily = "Carlito",
      fontWeight = 400,
      letterSpacing = 1,
      headerType = "h2",
      width = "auto",
      // vvvvvv make this prop true if the text coming from the external object/variable
      isInnerHtml,
      ...tooltipRest
    },
    ref
  ) => {
    const Tag = headerType;
    return (
      <>
        {isInnerHtml ? (
          <Tag
            ref={ref}
            className={`m-0 ${className}`}
            style={{
              fontSize,
              fontFamily,
              fontWeight,
              letterSpacing,
              width,
            }}
            dangerouslySetInnerHTML={{ __html: children || "" }}
            {...tooltipRest}
          />
        ) : (
          <Tag
            ref={ref}
            className={`m-0 ${className}`}
            style={{
              fontSize,
              fontFamily,
              fontWeight,
              letterSpacing,
              width,
            }}
            {...tooltipRest}
          >
            {" "}
            {children}
          </Tag>
        )}
      </>
    );
  }
);

export default HeaderText;
