import { Button } from "@mui/material";
import HeaderText from "../../components/elements/HeaderText";
import SectionWrapper from "../../components/elements/SectionWrapper";
import Carousel from "../../components/homePage/Carousel";
import RoadMap from "../../components/homePage/roadMap/RoadMap";
import { useWindowSize } from "react-use";

const HomePage = () => {
  const handleGetStartedBtn = () => {};

  const { width } = useWindowSize();
  const isMobile = width < 992;

  return (
    <>
      <SectionWrapper centered height={isMobile ? 600 : 800}>
        <HeaderText
          className="mb-2"
          headerType={"h1"}
          fontWeight={700}
          fontSize={isMobile ? 36 : 45}
          letterSpacing={5}
          width={isMobile ? "100%" : "50%"}
        >
          Platform for bringing your musical visions and needs to life, using
          advanced production tools.
        </HeaderText>
        <Button
          variant="contained"
          className="mt-3"
          name="learn-more"
          onClick={handleGetStartedBtn}
        >
          Learn more
        </Button>
        <Carousel />
      </SectionWrapper>
      <RoadMap />
    </>
  );
};

export default HomePage;
