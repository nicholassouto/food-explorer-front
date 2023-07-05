import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  margin-bottom: 1.7rem;
  padding: 0.8rem 2rem;
  color: ${({ theme }) => theme.light.light400};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 160%;
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.dark.dark1000};

  @media (min-width: 1024px) {
    border-radius: 0;
    border: none;
    margin-left: 3.5rem;
    padding: 0;
    margin-bottom: 0;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: normal;
    width: 70vw;
    margin-bottom: 0;
  }

  > p {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: 1024px) {
      border: 0.2rem solid ${({ theme }) => theme.dark.dark1000};
      padding: 1.4rem 2.4rem;
    }
  }

  .status {

    @media (min-width: 1024px) {
      padding: 1.4rem 2.0rem;
    }
    svg {
      margin-right: 0.8rem;
    }
  }

  > div:last-child {
    width: 20vw;
  }

  .id {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
    }
  }

  .dishes {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
      width: 70vw;
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
