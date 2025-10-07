import { CardContent } from "@mui/material";
import HeaderText from "../../../components/HeaderText";

type FeaturesProps = {
  header: string;
  icon: any;
};

const FeatureBox: React.FC<FeaturesProps> = ({ header, icon }) => {
  return (
    <div className="mt-1 position-relative">
      <div className="features-card position-relative w-75 d-flex flex-column justify-content-between">
        <CardContent className="d-flex flex-column justify-content-around align-items-center h-100">
          {icon}
          <HeaderText
            className="text-uppercase text-center"
            fontFamily="DM Sans, sans-serif"
            fontSize={18}
            fontWeight={700}
          >
            {header}
          </HeaderText>
        </CardContent>
      </div>
    </div>
  );
};

export default FeatureBox;
