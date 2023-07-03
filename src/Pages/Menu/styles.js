import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 8.6rem;
  grid-template-areas:
    "content"
    "footer";

  .close-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 5.6rem 2.8rem 2.4rem;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.dark.dark700};
    color: ${({ theme }) => theme.light.light100};
    border: none;
  }
  .search-bar {
    margin: 3.6rem 2.8rem auto;

    > input {
      display: block;
      background: transparent;
      border: none;
      width: 100%;
      color: ${({ theme }) => theme.light.light500};
      font-family: ${({ theme }) => theme.fonts.roboto};
      font-size: 1.6rem;
    }
  }

  .footer {
    grid-area: footer;
  }

  > main {
    display: flex;
    flex-direction: column;
    grid-area: content;
    overflow-y: auto;

    > span {
      margin-top: 3rem;
      margin-left: 3.8rem;
    }

    > h1 {
      margin-top: 3rem;
      margin-left: 3.8rem;
      padding-bottom: 1rem;

      margin-left: 3rem;
      margin-right: 3rem;
      margin-bottom: 5rem;
      border-bottom: 1px solid;

      h2 {
        margin-left: 0.8rem;
        font-size: 2.4rem;
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-weight: 300;
      }
    }
  }
`;
