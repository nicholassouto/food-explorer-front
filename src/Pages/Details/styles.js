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

  .footer {
    grid-area: footer;
  }

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;
