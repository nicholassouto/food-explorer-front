import { styled } from "styled-components";

import foods from "../../assets/foods.png";
import foods2 from "../../assets/foods2.png";

export const Container = styled.div`
  width: 19.1rem;
  height: 14.9rem;
  position: relative;
  left: 0.5rem;
  background: url(${foods}) no-repeat center center;
  background-size: cover;
  z-index: 2;

  @media (min-width: 1024px) {
    width: 57.2rem;
    height: 36.6rem;
    left: 0.5rem;
    background: url(${foods2}) no-repeat center center;
    background-size: cover;
  }
`;
