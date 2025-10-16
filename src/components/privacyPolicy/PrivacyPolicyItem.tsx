import type { PrivacyPolicy } from "../../pages/privacyPolicy/privacyPolicy";
import CustomText from "../elements/CustomText";
import HeaderText from "../elements/HeaderText";

const PrivacyPolicyItem: React.FC<PrivacyPolicy> = ({
  header,
  content,
  list,
  content2,
}) => {
  console.log(header);
  return (
    <div className="mb-5">
      <HeaderText
        headerType="h5"
        fontSize={22}
        fontFamily="Roboto, sans-serif"
        fontWeight={400}
        className="mb-3"
      >
        {header}
      </HeaderText>
      <CustomText textType="p" fontWeight={200} fontSize={16} className="mb-2">
        {content}
      </CustomText>
      {list &&
        list.map((list) => (
          <>
            {list.innerListHeader && (
              <CustomText textType="span" fontSize={16} fontWeight={400}>
                {list.innerListHeader}
              </CustomText>
            )}
            <ul>
              {list.innerListItem.map((innerListItemText) => (
                <li>
                  <CustomText textType="span" fontSize={16} fontWeight={200}>
                    {innerListItemText}
                  </CustomText>
                </li>
              ))}
            </ul>
          </>
        ))}
      {content2 && (
        <CustomText
          textType="p"
          fontWeight={200}
          fontSize={16}
          className="mb-2"
        >
          {content2}
        </CustomText>
      )}
    </div>
  );
};

export default PrivacyPolicyItem;
