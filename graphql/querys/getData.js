import { gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    products {
      id
      name
      name
      description
      price
      category {
        slug
      }
      isMenuable
      isCustomizable
      order
      ingredients {
        id
        name
      }
      configuration {
        ... on ComponentBurgerMeats {
          id
          name
          description
          isRadioButton
          data {
            id
            name
          }
        }

        ... on ComponentBurgerPointCooking {
          id
          name
          description
          isRadioButton
          data {
            id
            name
          }
        }
        ... on ComponentSandwichBreads {
          id
          name
          description
          isRadioButton
          data {
            id
            name
          }
        }
      }
      menu {
        ... on ComponentMenuInfo {
          id
          price
          description
        }
        ... on ComponentMenuSide {
          id
          name
          isRadioButton
          sides {
            ... on ComponentMenuSideItem {
              id
              isRadioButton
              extraPrice
              product {
                id
                name
              }
              options {
                id
                name
              }
            }
          }
        }
        ... on ComponentMenuBeverage {
          id
          name
          isRadioButton
          beverages {
            ... on ComponentMenuBeverageItem {
              id
              extraPrice
              product {
                id
                name
              }
            }
          }
        }
      }
    }
    productCategories {
      id
      name
      slug
      color
      order
    }
  }
`;

export default GET_DATA;
