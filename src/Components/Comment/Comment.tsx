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
    <Flex direction='column'>
        <Flex>
        <AuthorName>{userName}</AuthorName>
        <CommentText>{comment.text}</CommentText>
        </Flex>
    </Flex>
  )
}


const AuthorName = styled.span`
color: #172b4d;
`

const CommentText = styled.span`
color: #192d4e;
`
