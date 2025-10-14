import CollaborationForm from "../../components/collaborationPage/collaborationForm";
import CustomText from "../../components/elements/CustomText";
import HeaderText from "../../components/elements/HeaderText";
import SectionWrapper from "../../components/elements/SectionWrapper";
import CheckIcon from "@mui/icons-material/Check";

const CollaborationPage = () => {
  return (
    <>
      <SectionWrapper centered className="align-items-center" height={200}>
        <HeaderText
          headerType="h2"
          fontSize={40}
          fontFamily="Carlito"
          fontWeight={700}
          letterSpacing={3}
          className="mt-5"
        >
          Music creator? Let’s start working together!
        </HeaderText>
      </SectionWrapper>
      <SectionWrapper className="d-flex flex-column align-items-start mt-5">
        <CustomText
          fontFamily="DM Sans, sans-serif"
          fontSize={28}
          className="mb-3"
        >
          Requirements
        </CustomText>
        {collabRequirements.map((e) => (
          <div>
            <CheckIcon color="primary" />
            <CustomText
              fontWeight={200}
              fontSize={14}
              fontFamily={"Roboto, sans-serif"}
              className="text-center ms-2"
            >
              {e.text}
            </CustomText>
          </div>
        ))}
        <CollaborationForm />
      </SectionWrapper>
    </>
  );
};

export default CollaborationPage;

const collabRequirements = [
  { text: "Having high-quality tracks ready for sale" },
  { text: "Access to track projects for possible editing" },
  { text: "Honesty and commitment when fulfilling music orders" },
  {
    text: "Ability to use at least one DAW (Pro Tools, Cubase, Logic Pro, Ableton, FL Studio, etc.)",
  },
  { text: "Written English skills (B2 level)" },
];
