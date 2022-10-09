import { useContext, useEffect, useState } from "react";
import { MealContext } from "../../store/meal-context";
import { PrimaryButton } from "../../styles/standards.style";
import {
  ContentContainer,
  Paragraph,
  PrimaryHeading,
  SecondaryHeading,
} from "../../styles/typography.styled";

interface IMealDescription {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  backgroundColor?: string;
  boxShadowColor?: string;
  background?: string;
}


const Content = () => {

  const [mealDescription, setMealDescription] = useState<IMealDescription>({});
  const { currentChoice } = useContext(MealContext);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await import("../../data/data.json")
      setMealDescription(data.meals[Math.abs(currentChoice)]);
    }
    fetchMeals();
  })

  console.log(mealDescription)


  return (
    <ContentContainer>
      <PrimaryHeading>${mealDescription.price}</PrimaryHeading>
      <SecondaryHeading>{mealDescription.name}</SecondaryHeading>
      <Paragraph>
        {mealDescription.description}
      </Paragraph>
      <PrimaryButton>ORDER NOW</PrimaryButton>
    </ContentContainer>
  );
};

export default Content;
