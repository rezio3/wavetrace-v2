import GlassContainer from "../../components/elements/GlassContainer";
import HeaderText from "../../components/elements/HeaderText";
import SectionWrapper from "../../components/elements/SectionWrapper";
import TermsAndPolicyItem from "../../components/terms&Policy/TermsAndPolicyItem";
import { privacyPolicy } from "../../assets/privacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <SectionWrapper className="d-flex flex-column align-items-center mt-5">
      <HeaderText
        letterSpacing={3}
        headerType="h4"
        fontWeight={700}
        fontSize={40}
        className="mt-3 mb-5"
      >
        Privacy policy
      </HeaderText>
      <GlassContainer>
        {privacyPolicy.map((item, index) => (
          <TermsAndPolicyItem key={item.header + index} {...item} />
        ))}
      </GlassContainer>
    </SectionWrapper>
  );
};

export default PrivacyPolicyPage;
