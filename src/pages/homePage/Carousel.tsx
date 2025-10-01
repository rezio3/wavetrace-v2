import ImageItem from "../../components/ImageItem";
import arturiaLogo from "../../img/arturia.png";
import cubaseLogo from "../../img/cubase.png";
import ewLogo from "../../img/ew.png";
import hzLogo from "../../img/hz.png";
import kontaktLogo from "../../img/kontakt.png";
import pigmentsLogo from "../../img/pigments.png";
import spitfireLogo from "../../img/spitfire.png";
import "./Carousel.scss";

const Carousel = () => {
  const logos = [
    { src: arturiaLogo, alt: "arturia logo" },
    { src: cubaseLogo, alt: "cubase logo" },
    { src: ewLogo, alt: "east west logo" },
    { src: hzLogo, alt: "hans zimmer strings logo" },
    { src: kontaktLogo, alt: "kontakt logo" },
    { src: pigmentsLogo, alt: "pigments logo" },
    { src: spitfireLogo, alt: "spitfire logo" },
  ];
  return (
    <div className="position-relative carousel-container mt-5">
      <div className="carousel d-flex">
        {logos.map((logo) => (
          <ImageItem src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
