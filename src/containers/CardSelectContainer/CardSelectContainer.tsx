import React, { useState } from 'react';
import CardSelect from 'components/CardSelect/CardSelect';

const CardSelectContainer = () => {
  const [cardValue, setCardValue] = useState<number>(-1);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(0);
  let selectedCardArray: number[] = [];
  let count: number = 0;

  let cardValueArray: number[] = [];
  
  for (let i = startNumber; i <= endNumber; i++) {
    cardValueArray[i] = i;
  }

  console.log(count);
  const getRandomValue = (array: number[]) => {
    let temp = array.length;
    let current = array.length;
    let top = array.length;

    if(top) {
      while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        temp = array[current];
        array[current] = array[top];
        array[top] = temp;
      }
    }
    return array;
  }
  cardValueArray = getRandomValue(cardValueArray);
  console.log(cardValueArray);

  const handleRandomCardValue = () => {
    cardValueArray.length <= count ?
    alert("끝")
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
