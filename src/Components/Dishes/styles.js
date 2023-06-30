import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2.4rem;
  margin-bottom: 2.4rem;
  gap: 1.2rem;

  .heart-icon {
    position: relative;
    top: -10rem;
    left: 9rem;
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
      font-family: ${({ theme }) => theme.fonts.roboto};
      margin-right: -9rem;
      margin-left: -9rem;
      padding-left: 4rem;
    }
  }

  .pricing-include {
    display: flex;
    flex-direction: column;

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
      padding: 0.2rem;
      margin-left: 1.6rem;
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
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    @media (min-width: 1024px) {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }
`;
