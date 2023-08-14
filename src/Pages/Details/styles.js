import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto 8.6rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  .header {
    grid-area: header;
  }

  .footer {
    grid-area: footer;
  }

  .food-picture {
    margin-left: 8.2rem;
    image {
      width: 26.4rem;
      height: 26.4rem;
    }

    @media (min-width: 1024px) {
      margin-top: 12rem;
      margin-left: -6rem;
      svg {
        width: 38.9rem;
        height: 38.9rem;
      }
    }
  }

  .dish-description {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
    padding-left: 2rem;
    margin-left: 5.6rem;
    margin-right: 5.6rem;

    @media (min-width: 1024px) {
      margin-left: 7.6rem;
    }
  }

  .ingredients {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2.4rem;
    margin-top: 2rem;
    margin-left: 8.45rem;
    margin-right: 8.45rem;

    @media (min-width: 1024px) {
      margin-left: 9.45rem;
    }
  }

  .pricing-include {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 4.8rem;
    margin-bottom: 2rem;
    gap: 1.5rem;

    @media (min-width: 1024px) {
      margin-left: -20rem;
    }

    p {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 160%;
      font-style: normal;

      @media (min-width: 1024px) {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.6rem;
      }
    }
  }

  .pricing-include svg {
    height: 2.7rem;
    width: 2.7rem;
    margin-top: 0.5rem;

    @media (min-width: 1024px) {
      height: 2.4rem;
      width: 2.4rem;
    }
  }

  .pricing-include svg:first-child {
    margin-bottom: 0.5rem;
  }

  .button {
    display: flex;
    flex-direction: row;
    height: fit-content;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.light.light100};
    background-color: ${({ theme }) => theme.tomato.tomato100};
    border-radius: 0.3rem;
    padding: 0.6rem 1.4rem;

    p {
      font-size: 0.9rem;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 500;
      line-height: 1.6rem;

      @media (min-width: 1024px) {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
    }

    svg {
      margin-top: 0.8rem;

      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  .food-info {
    @media (min-width: 1024px) {
      margin-top: 14rem;
      margin-left: -5rem;
    }

    > h3 {
      font-size: 2.7rem;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 500;
      line-height: 140%;
      margin-top: 1.6rem;
      margin-left: 9.45rem;
    }
  }

  > main {
    grid-area: content;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
      }

    
    > div {
      display: flex;
      flex-direction: column;

      @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
      }
    }

    > section {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 140%;
      margin-top: 3.8rem;
      margin-bottom: 1.6rem;

      svg {
        margin-top: 0.6rem;
        margin-left: 5.6rem;
      }
    }
  }
`;

export const DishesImg = styled.img`
  display: flex;
  width: 26.4rem;
  height: 26.4rem;
  margin-left: 2rem;

  @media (min-width: 1024px) {
    width: 39.1rem;
    height: 38.9rem;
  }
`;
