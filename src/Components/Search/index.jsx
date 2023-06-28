import { Container } from "./styles";

export function Search({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
