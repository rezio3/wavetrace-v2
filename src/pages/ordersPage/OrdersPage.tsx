import SectionWrapper from "../../components/elements/SectionWrapper";
import OrderForm from "../../components/ordersPage/OrderForm";
import HeaderText from "../../components/elements/HeaderText";
import CustomText from "../../components/elements/CustomText";

const OrdersPage = () => {
  return (
    <>
      <SectionWrapper centered className="align-items-center gap-3">
        <HeaderText
          headerType="h2"
          fontSize={40}
          fontFamily="Carlito"
          fontWeight={700}
          letterSpacing={3}
          className="mt-5"
        >
          Order your custom track
        </HeaderText>
        <CustomText
          fontWeight={200}
          fontSize={20}
          fontFamily={"Roboto, sans-serif"}
          className="text-center"
        >
          Describe the style of music your project requires.
        </CustomText>
        <CustomText
          fontWeight={100}
          fontSize={16}
          fontFamily={"Roboto, sans-serif"}
          className="text-center mb-5"
        >
          We’ll get back to you as soon as possible with a personalized offer.
        </CustomText>
      </SectionWrapper>

      <SectionWrapper className="align-items-start">
        <OrderForm />
      </SectionWrapper>
    </>
  );
};

export default OrdersPage;
