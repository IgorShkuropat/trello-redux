import { useState, FC, useEffect } from 'react';
import styled from 'styled-components';
import { ModalContent } from '../ModalLogin';
import {
  Flex,
  BasicModal,
  CommentsBlock,
  ModalCardButtons,
  ModalCardDescription,
} from '../../../components';
import { TCard } from '../../../types';
import { IoClose } from 'react-icons/io5';
import { BsCardHeading } from 'react-icons/bs';
import { useAppDispatch } from '../../../hooks/redux/hooks';
import {
  changeDescription,
  removeCard,
  renameCard,
} from '../../../ducks/cards';

type TModalCardProps = {
  cardProps: TCard;
  disableModal: () => void;
};

export const ModalCard: FC<TModalCardProps> = ({
  cardProps: { title, id: cardId },
  disableModal,
}) => {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionText, setDescriptionText] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === `Escape`) {
        disableModal();
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const handleChangeNewTitle = e => {
    let newTitle = e.target.value;
    setTitleInput(newTitle);
  };

  const saveData = () => {
    if (!titleInput) {
      alert('Enter something!');
      return;
    }
    dispatch(renameCard({ cardId, newTitle: titleInput }));
    dispatch(changeDescription({ cardId, newText: descriptionText }));
  };

  return (
    <BasicModal>
      <ModalContent
        align="flex-start"
        direction="column"
        gap="16px"
        alignSelf="center"
      >
        <Flex justify="flex-end" direction="row" width="100%">
          <div style={{ marginRight: '4rem' }}>
            <Flex justify="flex-start" align="center" width="100%">
              <InputIcon />
              <div style={{ marginLeft: '2%' }}>
                <CardTitle value={titleInput} onChange={handleChangeNewTitle} />
              </div>
            </Flex>
          </div>
          <CloseButton onClick={disableModal} />
        </Flex>

        <ModalCardDescription
          descriptionText={descriptionText}
          setDescriptionText={setDescriptionText}
          cardId={cardId}
        />
        <CommentsBlock cardId={cardId} />
        <ModalCardButtons
          saveData={saveData}
          disableModal={disableModal}
          cardId={cardId}
          removeCard={() => dispatch(removeCard(cardId))}
        />
      </ModalContent>
    </BasicModal>
  );
};

const CloseButton = styled(IoClose)`
  border-radius: 50%;
  background-color: #f4f5f7;
  margin-top: 4%;
  margin-right: 4%;
  width: 1rem;
  height: 1rem;
  border: 3px black;
  justify-self: flex-end;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    filter: brightness(0.85);
  }
`;
const CardTitle = styled.input`
  width: 100%;
  margin: 0.5rem 1%;
  &:focus {
    outline: 1px solid black;
    background-color: #ffffff;
  }
  &::placeholder {
    text-align: start;
  }
  border-radius: 2px;
  border: 0;
  border-bottom: 1px solid grey;
  color: #172b4d;
  font-weight: 700;
  background-color: #f4f5f7;
`;
const InputIcon = styled(BsCardHeading)`
  margin-left: 4%;
  color: #172b4d;
`;
