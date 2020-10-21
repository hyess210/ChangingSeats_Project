import React, { useState } from 'react';
import CardSelect from 'components/CardSelect/CardSelect';

const CardSelectContainer = () => {
  const [cardValue, setCardValue] = useState<number>(-1);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(0);
  let selectedCardArray: number[] = [];

  let cardValueArray: number[] = new Array(endNumber );
  let count: number = 0;

  for (let i = startNumber; i <= endNumber; i++) {
    cardValueArray[i] = i;;
  }

  const handleRandomCardValue = () => {
    cardValueArray.length === count ?
    setCardValue(2202)
    :
    setCardValue(
      Math.floor(Math.random() * cardValueArray.length + startNumber)
    );
    selectedCardArray = selectedCardArray.concat(cardValue);
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
      handleRandomCardValue={handleRandomCardValue}
    />
  );
};

export default CardSelectContainer;
