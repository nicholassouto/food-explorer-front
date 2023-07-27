import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.dark.dark1000};
  border-radius: 0.5rem;

  p {
    color: ${({ theme }) => theme.light.light100};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 500;
    line-height: 2.4rem;
    font-style: normal;
  }
`;
