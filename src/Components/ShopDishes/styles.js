import { styled } from "styled-components";
import ravanello from "../../assets/Ravanello.png";
import torradaParma from "../../assets/Torradas-de-Parma.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  svg {
    width: 10rem;
    height: 10rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 3.5rem;

    @media (min-width: 1024px){
      margin-bottom: 3rem;
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      margin-left: -1rem;
    }

    p {
      color: ${({ theme }) => theme.tomato.tomato400};
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 160%;
      margin-left: -7rem;
    }
  }
`;

export const DishesImg = styled.image`
  display: flex;
  width: 19.1rem;
  height: 14.9rem;
  background: url(${ravanello}) no-repeat center center;
  background-size: contain;
`;