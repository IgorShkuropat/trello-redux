import { useContext, FC } from "react";
import { Context } from "../../store/Context";
import { Card } from "../../components";
import { generateID } from "../../utils/generateID";

type Props = {
  columnId: string;
};

export const CardList: FC<Props> = ({ columnId }) => {
  const {
    state: { cards },
    setState,
  } = useContext(Context);

  return (
    <>
      {cards.map(
        card =>
          columnId === card.columnId && <Card key={generateID()} card={card} />
      )}
    </>
  );
};
