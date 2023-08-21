import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1024px) {
      margin-bottom: 3rem;
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      margin-left: 1rem;
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

  .button {
    color: ${({ theme }) => theme.tomato.tomato400};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
    background: none;
    border: none;
    margin-left: 1rem;
  }

  .button:hover {
    cursor: pointer;
  }
`;

export const DishesImg = styled.img`
  display: flex;
  width: 10rem;
  height: 10rem;
  margin-left: 3rem;
`;
