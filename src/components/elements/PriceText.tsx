import HeaderText from "./HeaderText";

type PriceTextProps = {
  children: React.ReactNode;
  className?: string;
  fontSize?: number;
};

const PriceText: React.FC<PriceTextProps> = ({
  children,
  className = "",
  fontSize = 18,
}) => {
  return (
    <HeaderText
      fontSize={fontSize}
      fontWeight={700}
      headerType="h6"
      fontFamily="Roboto, sans-serif"
      className={`d-flex align-items-center me-1 ${className}`}
    >
      $ {!Number.isInteger(children) ? children : `${children}.00`}
    </HeaderText>
  );
};

export default PriceText;
