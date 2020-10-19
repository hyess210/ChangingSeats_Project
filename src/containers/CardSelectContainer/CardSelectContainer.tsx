import React, { useState } from 'react';
import CardSelect from 'components/CardSelect/CardSelect';

const CardSelectContainer = () => {
  const [cardValue, setCardValue] = useState<number>(-1);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(1);
  let selectedCardArray: number[] = [];
    console.log('container2');

  let cardValueArray: number[] = new Array(endNumber);
  let count: number = 0;

  for (let i = startNumber; i <= endNumber; i++) {
    cardValueArray[i] = i;
  }

  // const getRandom = (max: number, min: number) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };
  const handleRandomCardValue = () => {
    console.log(count);
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
