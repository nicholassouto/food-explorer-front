import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }

  .create {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.tomato.tomato100};
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;

    > p {
      color: ${({ theme }) => theme.light.light100};
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }

  .login {
    background: none;
    border: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3.2rem;
    padding-left: 9rem;
    padding-right: 9rem;

    > p {
      color: ${({ theme }) => theme.light.light100};
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-top: 15.8rem;

    @media (min-width: 1024px) {
      margin-top: -15rem;
    }

    > h2 {
      color: ${({ theme }) => theme.light.light100};
      font-size: 3.7rem;
      font-weight: 700;
    }

    svg {
      height: 4.3rem;
      width: 4.3rem;
    }
  }

  > section {
    margin-top: 7.3rem;

    @media (min-width: 1024px) {
      background-color: ${({ theme }) => theme.dark.dark700};
      border-radius: 1.6rem;
      padding: 6.4rem;
      margin-top: -5rem;
    }

    > h1 {
      display: none;

      @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.light.light100};
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 3.2rem;
      }
    }
  }
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ theme }) => theme.light.light400};
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  > input {
    background-color: ${({ theme }) => theme.dark.dark900};
    color: ${({ theme }) => theme.light.light100};
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1.2rem 1.4rem;
    margin-bottom: 3.2rem;
  }
`;
