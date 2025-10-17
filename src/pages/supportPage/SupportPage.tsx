import SectionWrapper from "../../components/elements/SectionWrapper";
import HeaderText from "../../components/elements/HeaderText";
import ContactForm from "../../components/contactForm/ContactForm";

const SupportPage = () => {
  return (
    <>
      <SectionWrapper centered className="align-items-center gap-3">
        <HeaderText
          headerType="h2"
          fontSize={40}
          fontFamily="Carlito"
          fontWeight={700}
          letterSpacing={3}
          className="my-5 text-center"
        >
          Support
        </HeaderText>
      </SectionWrapper>

      <SectionWrapper className="align-items-start">
        <ContactForm
          formHeader="Need help? We’ve got you covered"
          buttonLabel={"Send message"}
        />
      </SectionWrapper>
    </>
  );
};

export default SupportPage;
