import { styled } from "styled-components";

import foods from "../../assets/foods.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto;
  grid-template-areas:
    "header"
    "content";

  .header {
    grid-area: header;
  }

  .slogan {
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    margin: 4.4rem 1.6rem 6.2rem 3.6rem;
    padding-top: 3.6rem;
    padding-bottom: 2.2rem;
    gap: 0.5rem;

    @media (min-width: 1024px) {
      margin: 26.8rem 12.4rem 6.2rem;
      padding-top: 8.8rem;
      padding-bottom: 11.6rem;
    }

    > h1 {
      margin-left: 15.3rem;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 140%;
      
      @media (min-width: 1024px){
        margin-left: 59.8rem;
      }
    }

    > p {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 1.2rem;
      line-height: 140%;
      margin-left: 15.3rem;
    }

    > div {
      width: 19.1rem;
      height: 14.9rem;
      position: absolute;
      left: 0;
      top: 14rem;
      background: url(${foods}) no-repeat center center;
      background-size: cover;

      @media (min-width: 1024px) {
        width: 63.2rem;
        height: 40.6rem;
      }
    }
  }

  > main {
    grid-area: content;

    overflow-y: auto;
  }
`;
