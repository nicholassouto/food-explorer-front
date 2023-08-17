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

  .save-delete {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .delete-dish {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.dark.dark800};
    color: ${({ theme }) => theme.light.light100};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    border-radius: 0.5rem;
    padding: 1.2rem 3.4rem;
  }

  .save-dish {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.tomato.tomato400};
    color: ${({ theme }) => theme.light.light100};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    border-radius: 0.5rem;
    padding: 1.2rem 2rem;
  }

  .name-pic-cat {
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .upload-pic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 0.8rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.dark.dark800};
    color: ${({ theme }) => theme.light.light100};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 0.2rem 0.8rem;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      width: 100%;
      padding: 0.4rem 0.8rem;
    }
  }

  .dishe {
    @media (min-width: 1024px) {
      width: 35vw;

      span {
        padding: 0.8rem 0.8rem;
      }
    }
  }

  .category {
    @media (min-width: 1024px) {
      width: 20vw;

      select {
        padding: 1.2rem 0.8rem;
      }
    }
  }

  .ingredients-price {
    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.dark.dark800};
      color: ${({ theme }) => theme.light.light100};
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2.4rem;
      border: none;
    }
    section {
      flex-wrap: wrap;

      div {
        padding: 0.2rem 0.8rem;
      }
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      section {
        width: 55vw;
        flex-wrap: wrap;

        div {
          padding: 0.2rem 0.8rem;
        }
      }
    }
  }

  .price-change {
    width: 100%;
    @media (min-width: 1024px) {
      width: 15vw;
      padding: 1.3rem 0.8rem;
    }
  }

  > main {
    grid-area: content;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    margin-right: 3rem;
    padding-right: 1rem;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      margin-left: 12.5rem;
      margin-right: 12.5rem;
    }

    h2 {
      font-size: 3rem;
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

    > div {
      width: 100%;

      p {
        margin-bottom: 1.6rem;
        margin-top: 2.4rem;
      }

      span {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.8rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.dark.dark800};
        color: ${({ theme }) => theme.light.light100};
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        padding: 0.2rem 0.8rem;
      }

      select {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: 0.8rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.dark.dark900};
        color: ${({ theme }) => theme.light.light400};
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        padding: 0.2rem 0.8rem;
        border: none;
      }

      section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.8rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.dark.dark800};
        color: ${({ theme }) => theme.light.light100};
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        padding: 1.1rem 0.8rem;
      }

      textarea {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: 0.8rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.dark.dark800};
        color: ${({ theme }) => theme.light.light100};
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        padding: 0.2rem 0.8rem;
        resize: none;
        overflow: hidden;
      }
    }
  }
`;
