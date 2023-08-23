import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > main {
    padding: 5.7rem 2.6rem;
  }

  > section:last-child {
    display: flex;
    flex-direction: row;

    label {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.light.light400};
    }
  }

  .card-number,
  .expiration-date,
  .card-code {
    display: flex;
    flex-direction: column;
    width: 100%;

    > input {
      background: none;
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.light.light100};
      width: 100%;
      padding: 1.2rem 1.4rem;
      color: ${({ theme }) => theme.light.light100};
    }
  }

  .payment-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.2rem 3.2rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.tomato.tomato100};
    opacity: 0.8;

    color: ${({ theme }) => theme.light.light100};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  .payment-button-desk {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1.2rem 3.2rem;

      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.tomato.tomato100};
      opacity: 0.8;

      color: ${({ theme }) => theme.light.light100};
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }
`;

export const Data = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1.7rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-bottom: 3.7rem;
  }
`;
