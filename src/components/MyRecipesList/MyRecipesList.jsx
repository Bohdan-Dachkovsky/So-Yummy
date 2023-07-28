import MyRecipesItem from "../MyRecipesItem/MyRecipesItem";
import { WrapperList } from "./MyRecipesList.styled";

const MyRecipesList = ({ ...otherProps }) => {
  return (
    <WrapperList>
      <MyRecipesItem {...otherProps} />
    </WrapperList>
  );
};

export default MyRecipesList;
