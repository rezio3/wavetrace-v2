import GlassContainer from "../../components/elements/GlassContainer";
import HeaderText from "../../components/elements/HeaderText";
import SectionWrapper from "../../components/elements/SectionWrapper";
import TermsAndPolicyItem from "../../components/terms&Policy/TermsAndPolicyItem";
import { termsOfService } from "../../assets/termsOfService";
import CustomText from "../../components/elements/CustomText";

const TermsOfServicePage = () => {
  return (
    <SectionWrapper className="d-flex flex-column align-items-center mt-5">
      <HeaderText
        letterSpacing={3}
        headerType="h4"
        fontWeight={700}
        className="mt-3 mb-3"
      >
        Terms of Service
      </HeaderText>
      <CustomText
        className="text-secondary w-50 text-center mb-4"
        fontSize={16}
      >
        Welcome to Wavetrace. By accessing or using our website and services,
        you agree to these Terms of Service. Please read them carefully before
        making any purchases or submitting requests.
      </CustomText>
      <GlassContainer>
        {termsOfService.map((item, index) => (
          <TermsAndPolicyItem key={item.header + index} {...item} />
        ))}
      </GlassContainer>
    </SectionWrapper>
  );
};

export default TermsOfServicePage;
