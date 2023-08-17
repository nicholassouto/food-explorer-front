import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.dark.dark1000};
  color: ${({ theme }) => theme.light.light100};
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 500;
  line-height: 2.4rem;
`;
