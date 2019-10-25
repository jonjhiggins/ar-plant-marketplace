import styled from "styled-components";

interface Props {
  align?: "left" | "center" | "right";
  size: string;
  weight?: "normal" | "bold";
  preLine?: boolean;
  toLower?: boolean;
  letterSpacing?: "wide" | "semiWide" | "normal";
  color?: "black" | "white";
  italic?: boolean;
}

const spacing = {
  wide: "10px",
  semiWide: "5px",
  normal: "1px"
};

const Heading = styled.span<Props>`
  color: ${({ theme, color }) =>
    color === "white" ? theme.colors.white : theme.colors.bodyText};
  font-size: ${({ theme, size }) => theme.text[size]};
  font-weight: ${({ weight }) => (weight ? weight : "bold")};
  white-space: ${props => (props.preLine ? "pre-line" : "normal")};
  text-align: ${({ align }) => (align ? align : "initial")};
  text-transform: ${({ toLower }) => (!toLower ? "uppercase" : "none")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? spacing[letterSpacing] : spacing["semiWide"]};
  line-height: 1.25;
  font-style: ${({ italic }) => (italic ? "italic" : null)};

  & > a,
  & > a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

export default Heading;
