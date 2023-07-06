import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 11.5rem 2.3rem;

  .processing-payment {
    color: ${({ theme }) => theme.light.light400};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      height: 9.6rem;
      width: 9.6rem;
      margin-bottom: 2.4rem;
    }
  }
`;
