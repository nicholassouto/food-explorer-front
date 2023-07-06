import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;

  .payment-options {
    background-color: ${({ theme }) => theme.dark.dark500};
    width: 100%;
    margin-left: 3.5rem;
    margin-right: 4rem;

    > div:first-child {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.light.light600};
      border-left: 1px solid ${({ theme }) => theme.light.light600};
      border-right: 1px solid ${({ theme }) => theme.light.light600};

      
    }
  }

  .buy-button {
    color: ${({ theme }) => theme.light.light100};
    background: none;
    border: 1px solid ${({ theme }) => theme.light.light600};
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  .buy-button.change-color {
    background-color: ${({ theme }) => theme.dark.dark800};
  }

  .buy-button:first-child {
    border-top-left-radius: 0.8rem;
    padding: 2rem 5rem;
  }

  .buy-button:last-child {
    border-top-right-radius: 0.8rem;
    padding: 2.2rem 4.5rem;
  }
`;
