import React, { useState } from 'react';
import CardSelect from 'components/CardSelect/CardSelect';

const CardSelectContainer = () => {
  const [cardValue, setCardValue] = useState<number>(-1);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(1);

  let cardValueArray: number[] = new Array(endNumber);
  let selectedCardArray: number[] = [];

  for (let i = startNumber; i <= endNumber; i++) {
    cardValueArray[i] = i;
  }

  const handleRandomCardValue = () => {
    let count: number = 0;
    console.log('onClick');
    if (cardValueArray.length === count) {
      setCardValue(-2);
    } else {
      setCardValue(
        Math.floor(Math.random() * cardValueArray.length + startNumber)
      );
    }
    count++;
  };

  return (
    <CardSelect
      startNumber={startNumber}
      setStartNumber={setStartNumber}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      cardValue={cardValue}
      setCardValue={setCardValue}
      selectedCardArray={selectedCardArray}
      handleRandomCardValue={handleRandomCardValue}
    />
  );
};

export default CardSelectContainer;
