import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  .header {
    grid-area: header;
  }

  .slogan {
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fonts.poppins};
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    margin: -11rem 1.6rem 6.2rem 3.6rem;
    gap: 0.5rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 16rem;

    @media (min-width: 569px) and (max-width: 598px) {
      padding-top: 3rem;
      padding-bottom: 1.5rem;
      padding-left: 16rem;
    }

    @media (min-width: 598px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 3rem;
      padding-bottom: 3.2rem;
      padding-left: 16rem;
    }

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: -27.5rem 1.6rem 6.2rem 3.6rem;
      padding-right: 5rem;
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    > h1 {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;

      @media (min-width: 509px) {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 110%;
      }

      @media (min-width: 569px) {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
      }

      @media (min-width: 1024px) {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
      }
    }

    > p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;

      @media (min-width: 509px) {
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;
      }

      @media (min-width: 569px) {
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
      }

      @media (min-width: 1024px) {
        font-size: 1.4rem;
        line-height: 100%;
      }
    }
  }

  .footer {
    grid-area: footer;
  }

  .dishes {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 2.8rem;
  }

  > main {
    grid-area: content;

    overflow-y: auto;

    > div {
      margin-top: 1.5rem;

      @media (min-width: 1024px) {
        margin-top: 3.2rem;
      }
    }

    > hero {
      display: flex;
      flex-direction: column;
      margin-left: 2.4rem;

      @media (min-width: 1024px) {
        margin-left: 3.4rem;
      }

      h2 {
        font-size: 1.8rem;
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 2.4rem;

        @media (min-width: 1024px) {
          font-size: 3.2rem;
        }
      }
    }
  }
`;
