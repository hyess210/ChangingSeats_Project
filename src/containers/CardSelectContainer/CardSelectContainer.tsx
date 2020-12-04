import React, { useState } from 'react';
import CardSelect from 'components/CardSelect/CardSelect';
import useStores from 'lib/useStores';

const CardSelectContainer = () => {
	const { store } = useStores();
  const [cardValue, setCardValue] = useState<number>(-1);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(0);
  let selectedCardArray: number[] = [];
  const {
    count,
    getRandomValue,
    cardValueArray,
    IncreaseCount
  } = store.CardSelectStore;

  const handleRandomCardValue = () => {
    IncreaseCount();
    if (cardValueArray.length <= count) {
      setCardValue(-2);
    } else {
      setCardValue(
        cardValueArray[count]
      );
    }
      selectedCardArray = selectedCardArray.concat(cardValue);
    // }
  };

  return (
    <CardSelect
      startNumber={startNumber}
      setStartNumber={setStartNumber}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      cardValue={cardValue}
      setCardValue={setCardValue}
      getRandomValue={getRandomValue}
      handleRandomCardValue={handleRandomCardValue}
    />
  );
};

export default CardSelectContainer;
