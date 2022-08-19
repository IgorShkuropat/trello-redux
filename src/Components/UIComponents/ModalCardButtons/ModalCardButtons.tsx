import React, {FC} from 'react'
import {Flex, Button} from "../../../components"

type Props = {
    saveData: () => void,
    removeTask: (cardId: string) => void,
    cardId: string,
    disableModal: () => void
}
export const ModalCardButtons: FC<Props> = ({saveData, removeTask, disableModal, cardId}) => {
  return (
    <>
    <Flex
      align="center"
      justify="space-between"
      width="90%"
      alignSelf="center"
      margin="0 0 12px 0"
    >
      <Button onClick={saveData}>Save</Button>
      <Button
        color="#9f1010"
        onClick={() => (removeTask(cardId), disableModal())}
      >
        Delete
      </Button>
    </Flex>
  </>
  )
}
