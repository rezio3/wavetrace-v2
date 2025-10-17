import SectionWrapper from "../../components/elements/SectionWrapper";
import HeaderText from "../../components/elements/HeaderText";
import CustomText from "../../components/elements/CustomText";
import ContactForm from "../../components/contactForm/ContactForm";

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
          className="mt-5 text-center"
        >
          Order your custom track
        </HeaderText>
        <CustomText
          fontWeight={200}
          fontSize={20}
          fontFamily={"Roboto, sans-serif"}
          className="text-center"
        >
          Describe the style of music your project requires
        </CustomText>
        <CustomText
          fontWeight={100}
          fontSize={16}
          fontFamily={"Roboto, sans-serif"}
          className="text-center mb-5"
        >
          We’ll get back to you as soon as possible with a personalized offer
        </CustomText>
      </SectionWrapper>

      <SectionWrapper className="align-items-start">
        <ContactForm
          formHeader={"Place an order"}
          messageLabel={"Tell us what you need..."}
          buttonLabel={"Send request"}
          isOrderFormTips={true}
        />
      </SectionWrapper>
    </>
  );
};

export default OrdersPage;
