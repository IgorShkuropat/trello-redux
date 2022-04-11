import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  width?: string;
  height?: string;
  gap?: string;
  wrap?: string;
  basis?: string;
  onClick?: (MouseEventHandler<HTMLDivElement> & Function)
}

const StyledFlex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap || "0"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-basis: ${(props) => props.basis || "auto"};
`;

const Flex: FC<Props> = (props) => {
  return (
    <>
      <StyledFlex {...props} />
    </>
  );
};

export default Flex;
