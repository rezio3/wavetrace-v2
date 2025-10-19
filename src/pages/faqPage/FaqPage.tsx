import GlassContainer from "../../components/elements/GlassContainer";
import HeaderText from "../../components/elements/HeaderText";
import SectionWrapper from "../../components/elements/SectionWrapper";
import FaqList from "../../components/faqPage/FaqList";

const FaqPage = () => {
  return (
    <SectionWrapper className="d-flex flex-column align-items-center mt-5">
      <HeaderText
        letterSpacing={3}
        headerType="h4"
        fontWeight={700}
        fontSize={40}
        className="mt-3 mb-5 text-center"
      >
        Frequently Asked Questions
      </HeaderText>
      <GlassContainer className="d-flex align-items-start flex-column flex-lg-row w-100">
        <FaqList />
      </GlassContainer>
    </SectionWrapper>
  );
};

export default FaqPage;
