import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2.4rem;
  margin-bottom: 2.4rem;
  gap: 1.2rem;

  .food-details:hover {
    cursor: pointer;
  }

  .heart-icon {
    position: relative;
    top: -10rem;
    left: 9rem;

    @media (min-width: 1024px) {
      position: relative;
      top: -19rem;
      left: 12rem;
    }
  }

  .heart-icon:hover{
    cursor: pointer;
  }

  .dish-description {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      word-wrap: break-word;
      width: 100%;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      margin-right: -9rem;
      margin-left: -9rem;
      padding-left: 4rem;
    }
  }

  .pricing {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.cake.cake200};

    @media (min-width: 1024px) {
      font-size: 3.2rem;
      line-height: 160%;
    }
  }

  .pricing-include {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 1.4rem;

      @media (min-width: 1024px) {
        justify-content: center;
        margin-top: 1rem;
      }

      p {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
    }
  }

  .button {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.tomato.tomato100};
    width: 100%;
    height: fit-content;
    color: ${({ theme }) => theme.light.light100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 0 4.4rem;

    @media (min-width: 1024px) {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
      padding: 1.2rem 2.4rem;
      margin-left: 1.6rem;
      margin-top: -1.5rem;
    }
  }

  > div {
    display: flex;
    flex-direction: row;

    svg:first-child {
      margin-bottom: 0.5rem;
    }
  }

  > h3 {
    margin-top: -3.5rem;
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    @media (min-width: 1024px) {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }

  > section {
    svg {
      width: 8.8rem;
      height: 8.8rem;

      @media (min-width: 1024px) {
        width: 17.6rem;
        height: 17.6rem;
      }
    }
  }
`;
