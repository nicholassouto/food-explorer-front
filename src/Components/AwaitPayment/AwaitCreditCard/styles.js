import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 11.5rem 2.3rem;

  @media (min-width: 1024px) {
    margin: 0;
  }

  .processing-payment {
    color: ${({ theme }) => theme.light.light100};
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (min-width: 1024px) {
      width: 30vw;
      
    }

    svg {
      height: 9.6rem;
      width: 9.6rem;
      margin-bottom: 2.4rem;

      @media (min-width: 1024px) {
        width: 12.8rem;
        height: 12.8rem;
      }
    }
  }
`;
