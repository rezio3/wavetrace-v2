import HeaderText from "../../HeaderText";
import SectionWrapper from "../../SectionWrapper";
import StepBox from "./StepBox";
import "./RoadMap.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import StraightenIcon from "@mui/icons-material/Straighten";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import EditIcon from "@mui/icons-material/Edit";
import GlassCard from "../../elements/GlassCard";

const RoadMap = () => {
  return (
    <SectionWrapper centered>
      <HeaderText
        className="d-flex justify-content-center w-100 mb-5 text-uppercase"
        fontSize={32}
        letterSpacing={5}
        fontWeight={700}
      >
        How does it work?
      </HeaderText>
      <div className="d-flex w-100 justify-content-between flex-wrap mt-5 mb-5">
        {stepBoxes.map((e) => {
          return <StepBox number={e.number} header={e.header} txt={e.txt} />;
        })}
      </div>
      <HeaderText
        className="d-flex justify-content-center w-100 mb-4 text-uppercase"
        fontSize={32}
        letterSpacing={5}
        fontWeight={700}
      >
        Features
      </HeaderText>
      <div className="d-flex w-100 justify-content-between flex-wrap  mb-5">
        {features.map((e) => {
          return (
            <div className="mt-1 position-relative">
              <GlassCard
                header={e.header}
                icon={e.icon}
                height={160}
                width={350}
                className="mt-3"
                isTextBold
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default RoadMap;

const stepBoxes = [
  {
    number: "01",
    header: "Login",
    txt: "Create an account on the platform.",
  },
  {
    number: "02",
    header: "Order music for free",
    txt: "Place a free order using the form. The more detailed the description, the more precisely the order will be executed.",
  },
  {
    number: "03",
    header: "Realization in 24 hours",
    txt: "After 24h, you will receive a free one-minute sample of the music with a watermark to listen to.",
  },
  {
    number: "04",
    header: "Buy or edit",
    txt: "You can purchase your music or edit it according to your preferences.",
  },
  {
    number: "05",
    header: "Extend",
    txt: "Extend the music you ordered to a specific length.",
  },
];

const features = [
  {
    header: "Music within 24 hours",
    icon: <AccessTimeIcon className="feature-icon" />,
  },
  {
    header: "Pay only if you like it",
    icon: <CurrencyExchangeIcon className="feature-icon" />,
  },
  {
    header: "Wide range of orchestral instruments",
    icon: <QueueMusicIcon className="feature-icon" />,
  },
  {
    header: "Synthesizers and electronic music",
    icon: <StraightenIcon className="feature-icon" />,
  },
  {
    header: "Free order placement",
    icon: <FormatIndentIncreaseIcon className="feature-icon" />,
  },
  {
    header: "Modify and enhance your ordered music",
    icon: <EditIcon className="feature-icon" />,
  },
];
