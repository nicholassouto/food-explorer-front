import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
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

  .button {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.tomato.tomato100};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 7.2rem;
    margin-left: 16.7rem;
    margin-top: 4.7rem;
    margin-bottom: 5.8rem;

    color: ${({ theme }) => theme.light.light100};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  .payment {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      margin-left: 23rem;

      > h1 {
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
      }
    }
  }

 

  > main {
    grid-area: content;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      margin-left: 9.3rem;
      display: flex;
      flex-direction: row;
    }

    h1 {
      margin-top: 5.6rem;
      margin-bottom: 2.7rem;
      margin-left: 3.5rem;
    }

    h3 {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;
      margin-top: 1.8rem;
      margin-left: 3.5rem;

      @media (min-width: 1024px) {
        margin-top: 0;
        margin-left: 4rem;
        padding-bottom: 6rem;
      }
    }
  }
`;
