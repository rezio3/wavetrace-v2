import { Link } from "react-router-dom";
import CustomText from "../elements/CustomText";
import SectionWrapper from "../elements/SectionWrapper";
import CancelIcon from "@mui/icons-material/Cancel";
import { urlRouter } from "../../routes/urlRouter";

const CancelView = () => {
  return (
    <SectionWrapper centered className="align-items-center gap-3">
      <CustomText className="text-center" fontSize={34}>
        Oops… something went wrong.
      </CustomText>

      <CancelIcon className="text-danger" style={{ fontSize: 50 }} />

      <CustomText fontWeight={200} className="mt-3 text-center">
        Please try again, or reach out to our{" "}
        <Link to={urlRouter.support} className="tag-a-link">
          support team
        </Link>{" "}
        for assistance.
      </CustomText>
    </SectionWrapper>
  );
};

export default CancelView;
