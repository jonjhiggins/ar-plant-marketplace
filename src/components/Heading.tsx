import styled from "styled-components";

interface Props {
  centered?: boolean;
  size: string;
  weight?: "normal" | "bold";
  preLine?: boolean;
  toLower?: boolean;
  letterSpacing?: "wide" | "semiWide" | "normal";
}

const spacing = {
  wide: "10px",
  semiWide: "5px",
  normal: "1px"
};

const Heading = styled.span<Props>`
  color: ${({ theme }) => theme.colors.bodyText};
  font-size: ${({ theme, size }) => theme.text[size]};
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
  white-space: ${props => (props.preLine ? "pre-line" : "normal")};
  text-align: ${({ centered }) => (centered ? "center" : "initial")};
  text-transform: ${({ toLower }) => (!toLower ? "uppercase" : "none")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? spacing[letterSpacing] : spacing["semiWide"]};
  line-height: 1.25;
`;

export default Heading;
