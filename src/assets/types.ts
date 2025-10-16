export type TermsAndPolicy = {
  header: string;
  content?: string;
  isListNumerable?: boolean;
  list?: TermsAndPolicyInnerList[];
  content2?: string;
};

type TermsAndPolicyInnerList = {
  innerListHeader?: string;
  innerListItem: string[];
};
