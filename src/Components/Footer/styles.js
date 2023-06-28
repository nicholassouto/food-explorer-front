import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 2rem;
  background-color: ${({ theme }) => theme.dark.dark600};

  > div {
    color: ${({ theme }) => theme.light.light200};
    p {
      font-size: 1.2rem;
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
    color: ${({ theme }) => theme.light.light700};
    font-size: 1.5rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.roboto};
  }
`;
