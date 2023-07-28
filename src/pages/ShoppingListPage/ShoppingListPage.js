import { Container } from "../../Container/Container";
import ShoppingList from "../../IngredientsShoppingList/ShoppingList/ShoppingList";
import ThemeWrap from "../../SharedLayout/SharedLayoutStyled";
import Title from "../../Title/Title";
import ContainerSection from "../../ContainerSection/ContainerSection";
import { ContainerItem, ContainerPosition } from "./ShoppingListPage.styled";
import { FooterBgWrapper } from "../../FooterBgWrapper/FooterBgWrapper.styled";

const ShoppingListPage = () => {
  return (
    <ThemeWrap>
      <FooterBgWrapper>
        {/* <ShoppingListContainer> */}

        <Container>
          <ContainerSection>
            <Title>Shopping list</Title>

            <ContainerItem>
              <p> Products </p>
              <ContainerPosition>
                <p> Number</p>
                <p> Remove</p>
              </ContainerPosition>
            </ContainerItem>
            <ShoppingList />
          </ContainerSection>
        </Container>
      </FooterBgWrapper>
    </ThemeWrap>
  );
};

export default ShoppingListPage;
