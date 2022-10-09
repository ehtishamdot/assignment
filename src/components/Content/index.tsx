import { useContext, useEffect, useState } from "react";
import { MealContext } from "../../store/meal-context";
import { PrimaryButton } from "../../styles/standards.styled";
import {
  ContentContainer,
  Paragraph,
  PrimaryHeading,
  SecondaryHeading,
} from "../../styles/typography.styled";

const Content = () => {

  const { mealDescription } = useContext(MealContext);

  return (
    <ContentContainer>
      <PrimaryHeading textColor={mealDescription.buttonColor} >${mealDescription.price}</PrimaryHeading>
      <SecondaryHeading>{mealDescription.name}</SecondaryHeading>
      <Paragraph>
        {mealDescription.description}
      </Paragraph>
      <PrimaryButton buttonColor={mealDescription.buttonColor} boxShadowColor={mealDescription.boxShadowColor}> ORDER NOW </PrimaryButton>
    </ContentContainer>
  );
};

export default Content;
