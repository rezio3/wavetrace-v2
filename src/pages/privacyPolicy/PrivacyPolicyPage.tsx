import GlassContainer from "../../components/elements/GlassContainer";
import HeaderText from "../../components/elements/HeaderText";
import SectionWrapper from "../../components/elements/SectionWrapper";
import PrivacyPolicyItem from "../../components/privacyPolicy/PrivacyPolicyItem";
import { privacyPolicy } from "./privacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <SectionWrapper className="d-flex flex-column align-items-center mt-5">
      <HeaderText
        letterSpacing={3}
        headerType="h4"
        fontWeight={700}
        className="my-4"
      >
        Privacy policy
      </HeaderText>
      <GlassContainer>
        {privacyPolicy.map((item, index) => (
          <PrivacyPolicyItem key={item.header + index} {...item} />
        ))}
      </GlassContainer>
    </SectionWrapper>
  );
};

export default PrivacyPolicyPage;
