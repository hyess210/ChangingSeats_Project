import React, { useState } from 'react';
import CardSelect from 'components/CardSelect/CardSelect';

const CardSelectContainer = () => {
  const [cardValue, setCardValue] = useState<number>(-1);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(0);
  let selectedCardArray: number[] = [];

  let cardValueArray: number[] = [];
  let count: number = 0;

  for (let i = startNumber; i <= endNumber; i++) {
    cardValueArray[i] = i;;
  }

  const getRandomValue = () => {
    let temp = cardValueArray.length;
    let current = cardValueArray.length;
    let top = cardValueArray.length;

    if(top) {
      while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        temp = cardValueArray[current];
        cardValueArray[current] = cardValueArray[top];
        cardValueArray[top] = temp;
      }
    }
    return cardValueArray;
  }
  cardValueArray = getRandomValue();

  const handleRandomCardValue = () => {
    cardValueArray.length <= count ?
    setCardValue(-1)
    :
    setCardValue(
      // Math.floor(Math.random() * cardValueArray.length + startNumber)
      cardValueArray[count]
    );
    selectedCardArray = selectedCardArray.concat(cardValue);
    count++;
    console.log(count);
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
