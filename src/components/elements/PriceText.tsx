import HeaderText from "./HeaderText";

type PriceTextProps = {
  children: React.ReactNode;
};

const PriceText: React.FC<PriceTextProps> = ({ children }) => {
  return (
    <HeaderText
      fontSize={18}
      fontWeight={700}
      headerType="h6"
      fontFamily="Roboto, sans-serif"
      className="d-flex align-items-center me-1"
    >
      $ {!Number.isInteger(children) ? children : `${children}.00`}
    </HeaderText>
  );
};

export default PriceText;
