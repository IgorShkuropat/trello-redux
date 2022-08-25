import styled from 'styled-components';
import { TColumn } from '../../types';
import { Flex, Card } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addCard } from '../../ducks/cards';
import { renameColumn } from '../../ducks/columns';
import { selectAttachedCards } from '../../ducks/cards';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
  column: TColumn;
};

type FormFields = {
  title: string;
  cardName: string;
};

export const Column: React.FC<Props> = ({
  column: { id: columnId, title },
}) => {
  const { handleSubmit, register, resetField, getValues } = useForm<FormFields>(
    {
      defaultValues: {
        title: title,
      },
    },
  );

  const dispatch = useAppDispatch();
  const attachedCards = useAppSelector(selectAttachedCards(columnId));

  const addCardToColumn: SubmitHandler<FormFields> = data => {
    dispatch(addCard({ columnId, title: data.cardName }));
    resetField('cardName');
  };

  return (
    <>
      <CardContainer
        direction="column"
        justify="flex-start"
        align="center"
        gap="0.25rem"
        basis="17.1875rem"
      >
        <Title
          {...register('title', {
            required: true,
            maxLength: 20,
            onChange: () => {
              const newTitle = getValues('title');
              dispatch(renameColumn({ columnId, newTitle }));
            },
          })}
          type="text"
          placeholder="Title!"
        />
        <Flex
          direction="column"
          justify="flex-start"
          align="center"
          gap="0.25rem"
        >
          <Input
            {...register('cardName', { required: true })}
            type="text"
            placeholder="Enter card title"
          />
          {attachedCards.map(card => (
            <Card key={card.id} card={card} />
          ))}
          <Button
            onClick={handleSubmit(addCardToColumn, () =>
              alert("Card name can't be empty!"),
            )}
          >
            <ButtonText>Add card</ButtonText>
          </Button>
        </Flex>
      </CardContainer>
    </>
  );
};

const Button = styled.button`
  border: none;
  min-width: 9.375rem;
  width: 100%;
  &:hover {
    filter: brightness(0.7);
  }
  box-shadow: 2px 2px 3px 0px rgba(34, 60, 80, 0.2);
  border-radius: 0.2rem;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 9.375rem;
  outline: none;
  border: none;

  &::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &::-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:-ms-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &[type='text'] {
    font-family: Roboto, sans-serif;
    font-size: 0.7rem;
    color: #7c818b;
    padding: 0;
  }
  background: 0;
  border-radius: 0.2rem;
`;

const ButtonText = styled.span`
  color: #7c818b;
`;

const CardContainer = styled(Flex)`
  padding: 0.3rem;
  border-radius: 0.2rem;
  background-color: hsl(227, 14%, 93%);
  height: fit-content;
`;

export const Title = styled(Input)`
  &::-webkit-input-placeholder {
    text-align: center;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }

  &:-ms-input-placeholder {
    text-align: center;
  }
  &[type='text'] {
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: rgb(78, 93, 119);
    padding: 0;
    text-align: center;
  }
  &:focus {
    outline: 1.5px solid black;
  }
`;
