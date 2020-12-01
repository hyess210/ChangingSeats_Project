import React, { useState } from 'react';
import CardSelect from 'components/CardSelect/CardSelect';
import useStores from 'lib/useStores';

const CardSelectContainer = () => {
	const { store } = useStores();
  const [cardValue, setCardValue] = useState<number>(-1);
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(0);
  let selectedCardArray: number[] = [];
  // let count: number = 0;
  let {
    count,
    cardValueArray
  } = store.CardSelectStore;
  const {
    getCardValueArray
  } = store.CardSelectStore;

  console.log(count);
  const getRandomValue = (array: number[]) => {
    getCardValueArray(endNumber,startNumber);
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
  console.log(cardValueArray);

  const handleRandomCardValue = () => {
    cardValueArray = getRandomValue(cardValueArray);
    cardValueArray.length <= count ?
    alert("끝")
    :
    setCardValue(
      cardValueArray[count]
    );
    selectedCardArray = selectedCardArray.concat(cardValue);
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
