import { ContentContainer } from "../../styles/content.styled";
import { PrimaryButton } from "../../styles/standards.style";
import {
  Paragraph,
  PrimaryHeading,
  SecondaryHeading,
} from "../../styles/typography.styled";

const Content = () => {
  return (
    <ContentContainer>
      <PrimaryHeading>$32</PrimaryHeading>
      <SecondaryHeading>Green Goddess Chicken Salad</SecondaryHeading>
      <Paragraph>
        It is a non vegetarian salad which consists of the green goddess
        dressing mixed with chicken, peppers, olives and celery.
      </Paragraph>
      <PrimaryButton>ORDER NOW</PrimaryButton>
    </ContentContainer>
  );
};

export default Content;
