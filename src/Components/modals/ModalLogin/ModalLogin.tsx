import styled from 'styled-components';
import { Flex, BasicModal, Button } from '../../../components';
import { useAppDispatch } from '../../../hooks/redux/hooks';
import { setName } from '../../../ducks/user/userSlice';
import { useForm, SubmitHandler } from 'react-hook-form';

type Input = {
  nameInput: string;
};
export const ModalLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Input>();
  const dispatch = useAppDispatch();

  const onFormSubmit: SubmitHandler<Input> = data => {
    console.log(data);
    dispatch(setName(data.nameInput!));
  };

  return (
    <BasicModal>
      <ModalContent
        justify="center"
        alignSelf="center"
        direction="column"
        gap="8px"
      >
        <ModalH1>Your name is?</ModalH1>
        <Flex direction="column" alignSelf="center">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <ModalInput
              {...register('nameInput', { required: true, maxLength: 15 })}
              type="text"
              name="nameInput"
              placeholder="Name"
            />
            <Button type="submit" margin="12px 0">
              Submit
            </Button>
          </form>
        </Flex>
      </ModalContent>
    </BasicModal>
  );
};

export const ModalContent = styled(Flex)`
  background-color: #f4f5f7;
  border-radius: 0.1875rem;
`;
const ModalH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #475672;
  margin: 0;
  padding: 0.5rem 3rem;
`;
const ModalInput = styled.input`
  width: 90%;
  &:focus {
    outline: 0px solid black;
  }
  &::placeholder {
    text-align: start;
  }
  border-bottom: 1px black solid;
  border-radius: 0;
`;
