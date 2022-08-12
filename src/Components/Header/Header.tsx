import { FC } from "react";
import styled from "styled-components";
import Flex from "../UI/Flex";
import { GiBiceps} from "react-icons/gi";



interface Props {
  props?: string;
}

const Header: FC<Props> = () => {
  return (
    <>
      <Background>
        <Flex align="center" justify="center" width="100%" height="2.5rem">
          <LogoText>Goga</LogoText>
          <Logo />
        </Flex>
      </Background>
    </>
  );
};

export default Header;



const Background = styled.header`
  background-color: #0066a0;
  width: 100%;
  height: 2.6rem;
`;

const Logo = styled(GiBiceps)`
  display: block;
  width: 2rem;
  height: 2rem;
  color: white;
`;

const LogoText = styled.h1`
  color: white;
  font-weight: 700;
  margin: 0;
`;
