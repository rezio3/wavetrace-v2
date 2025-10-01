import { GiSoundWaves } from "react-icons/gi";
import HeaderText from "../HeaderText";
import SectionWrapper from "../SectionWrapper";

const NavBar = () => {
  return (
    <SectionWrapper className="mt-4">
      <HeaderText
        headerType="h1"
        letterSpacing={5}
        fontWeight={700}
        fontSize={40}
        className="me-2 mt-1"
      >
        Wavetrace
      </HeaderText>

      <GiSoundWaves className="display-3 text-secondary" />
    </SectionWrapper>
  );
};

export default NavBar;
