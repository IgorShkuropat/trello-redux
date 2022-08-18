import styled from "styled-components";

interface Props {
  direction?: string;
  justify?: string;
  align?: string;
  alignSelf?: string;
  margin?: string;
  width?: string;
  height?: string;
  gap?: string;
  wrap?: string;
  basis?: string;
}

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  align-self: ${(props) => props.alignSelf || "stretch"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap || "0"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-basis: ${(props) => props.basis || "auto"};
`;

