import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 500;
  line-height: 2.4rem;

  background-color: ${({ theme, isNew }) => (isNew ? "transparent" : theme.dark.dark900)};
  color: ${({ theme }) => theme.light.light100};

  border: ${({ theme, isNew }) => (isNew ? `0.1rem dashed ${theme.light.light100}` : "none")};


  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.tomato.tomato400};
  }

  .button-add {
    color: ${({ theme }) => theme.carrot.carrot100};
  }

  > input {

    color: ${({ theme }) => theme.light.light400};
    background: transparent;
    border: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.light.light100};
  }
`;
