import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.dark.dark900};
  height: fit-content;
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
  gap: 1.4rem;
`;
