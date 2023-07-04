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

  > main {
    grid-area: content;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    section {
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    h1 {
      margin-top: 5.6rem;
      margin-bottom: 2.7rem;
      margin-left: 3.5rem;
    }
  }
`;
