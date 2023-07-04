import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.dark.dark700};

  > div:first-child {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  > div:last-child {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .receipt {
    display: flex;

    @media (min-width: 1024px) {
      display: none;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      right: 2.1rem;
      top: 6rem;

      color: ${({ theme }) => theme.light.light100};
      background-color: ${({ theme }) => theme.tomato.tomato200};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
      font-family: ${({ theme }) => theme.fonts.poppins};

      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .orders {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: ${({ theme }) => theme.tomato.tomato100};
      border-radius: 0.5rem;
      padding: 1.2rem 3.2rem;
      margin-right: 3.2rem;
      color: ${({ theme }) => theme.light.light100};

      svg {
        margin-right: 0.8rem;
      }
    }
  }

  .search-bar {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
      width: 100%;
      margin: auto 3.2rem;
    }

    svg {
      display: none;
      @media (min-width: 1024px) {
        display: block;
      }
    }

    > input {
      display: none;
      @media (min-width: 1024px) {
        display: block;
        background: transparent;
        border: none;
        width: 100%;
        color: ${({ theme }) => theme.light.light500};
      }
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 0.8rem;
  width: fit-content;

  @media (min-width: 1024px) {
    min-width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  svg {
    margin-top: 0.5rem;
  }

  > h2 {
    color: ${({ theme }) => theme.light.light100};
    font-size: 2.1rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.roboto};
  }
`;

export const PedidosFavoritos = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
    gap: 3.2rem;
  }
`;
