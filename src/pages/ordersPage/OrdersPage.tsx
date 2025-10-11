import SectionWrapper from "../../components/elements/SectionWrapper";
import OrderForm from "../../components/ordersPage/OrderForm";
import HeaderText from "../../components/elements/HeaderText";

const OrdersPage = () => {
  return (
    <>
      <SectionWrapper className="d-flex justify-content-center">
        <HeaderText
          headerType="h2"
          fontSize={40}
          fontFamily="Carlito"
          fontWeight={700}
          letterSpacing={5}
          className="my-5 py-2"
        >
          Order your custom track
        </HeaderText>
      </SectionWrapper>

      <SectionWrapper className="align-items-start">
        <OrderForm />
      </SectionWrapper>
    </>
  );
};

export default OrdersPage;
