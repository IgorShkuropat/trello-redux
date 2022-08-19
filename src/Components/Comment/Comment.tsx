import React, {FC} from 'react'
import { TComment } from "../../types"
import {Flex} from "../../components"
import styled from "styled-components";

type Props = {
    userName: string,
    comment: TComment
}
export const Comment: FC<Props> = ({userName, comment}) => {

  return (
    <Flex direction='column' margin='8px 12px'>
        <Flex direction='column' gap='4px'>
        <AuthorName>{userName}</AuthorName>
        <CommentText>{comment.text}</CommentText>
        </Flex>
    </Flex>
  )
}


const AuthorName = styled.span`
color: #172b4d;
font-weight: 700;
font-size: 1rem;
`

const CommentText = styled.span`
color: #192d4e;
font-weight: 400;
font-size: 0.75rem;
`
