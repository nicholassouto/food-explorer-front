import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  .button-remove {
    color: ${({ theme }) => theme.tomato.tomato400};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
    background: none;
    border: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3.5rem;

    @media (min-width: 1024px) {
      margin-bottom: 3rem;
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
    }

    p {
      color: ${({ theme }) => theme.tomato.tomato400};
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 160%;
      margin-left: -7rem;
    }
  }

  svg {
    display: flex;
    width: 10rem;
    height: 10rem;
    margin-left: 3rem;
    background-color: white;
    border-radius: 50%;
  }
`;

export const DishesImg = styled.img`
  display: flex;
  width: 10rem;
  height: 10rem;
  margin-left: 2rem;
`;
