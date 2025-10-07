import { Button } from "@mui/material";
import HeaderText from "../../components/HeaderText";
import SectionWrapper from "../../components/SectionWrapper";
import Carousel from "../../components/homePage/Carousel";
import RoadMap from "../../components/homePage/roadMap/RoadMap";

const HomePage = () => {
  const handleGetStartedBtn = () => {};

  return (
    <>
      <SectionWrapper centered height={800}>
        <HeaderText
          className="w-50"
          headerType={"h1"}
          fontWeight={700}
          letterSpacing={5}
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
