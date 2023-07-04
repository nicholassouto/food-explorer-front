import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.dark.dark1000};
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  margin-bottom: 1.7rem;
  padding: 0.8rem 2rem;
  color: ${({ theme }) => theme.light.light400};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 160%;

  @media (min-width: 1024px){
    margin-left: 0;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0.5rem;

  > p {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
  }

  .dishes-id {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;

export const Dishes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;


