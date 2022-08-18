import styled from "styled-components";
import {Flex} from '../../Flex'
import React from "react"

type TModal = {
  children: React.ReactNode;
}

export const BasicModal: React.FC<TModal> = (props) => {
  return (
    <Modal justify="center" align="center">
      {props.children}
    </Modal>
  )
}



const Modal = styled(Flex)`
height: 100vh;
width: 100vw;
position: fixed;
background-color: rgba(0,0,0,0.4);
top: 0;
left: 0;
transition: opacity 0.3s ease;
`