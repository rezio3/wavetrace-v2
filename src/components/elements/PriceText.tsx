import CustomText from "./CustomText";

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
    <CustomText
      fontSize={fontSize}
      fontWeight={700}
      textType="span"
      fontFamily="Roboto, sans-serif"
      className={`d-flex align-items-center text-nowrap ${className}`}
    >
      $ {!Number.isInteger(children) ? children : `${children}.00`}
    </CustomText>
  );
};

export default PriceText;
