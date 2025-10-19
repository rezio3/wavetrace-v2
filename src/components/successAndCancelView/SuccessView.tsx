import { Link } from "react-router-dom";
import CustomText from "../elements/CustomText";
import SectionWrapper from "../elements/SectionWrapper";
import { urlRouter } from "../../routes/urlRouter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessView = () => {
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const title = params.get("title");

  return (
    <SectionWrapper centered className="align-items-center gap-3">
      <CustomText className="" fontSize={34}>
        Thank you for your purchase!
      </CustomText>
      <CustomText className="" fontSize={24} fontWeight={300}>
        You’ve successfully purchased <b>{title}</b>.
      </CustomText>
      <CheckCircleIcon className="text-success" style={{ fontSize: 50 }} />
      <CustomText fontWeight={200} className="mb-5">
        A download link has been sent to your email: <b>{email}</b>
      </CustomText>
      <CustomText fontWeight={200} className="mt-5">
        If you have any questions, please contact our{" "}
        <Link to={urlRouter.support} className="tag-a-link">
          support team
        </Link>
        .
      </CustomText>
    </SectionWrapper>
  );
};

export default SuccessView;
