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

  > main {
    grid-area: content;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    margin-right: 3rem;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
    }

    > section {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 140%;
      margin-bottom: 1.6rem;
      margin-top: 1rem;

      svg {
        margin-top: 0.6rem;
      }

      svg:hover,
      p:hover {
        cursor: pointer;
      }
    }
  }
`;
