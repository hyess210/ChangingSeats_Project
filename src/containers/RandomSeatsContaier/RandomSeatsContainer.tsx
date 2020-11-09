import React, { useState } from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';

const RandomSeatsContainer = () => {
    let tableTag: string = '<table>';
    const [result, setResult] = useState<string>('');
    const [isSeatHidden, setIsSeatHidden] = useState<boolean>(false);
    const [seatValue, setSeatValue] = useState<number>(0);
    // const [seatValueArray, setSeatValueArray] = useState<number[]>([]);
    let array: number[] = [];

  const createTable = (rows: number, columns: number) => {
    const studentNumber:number = rows * columns;
    for (let i = 0; i < studentNumber; ++ i) {
      array[i] = i+1;
    };

    const getRandomArray = ( array:number[] ) => {
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
    array = getRandomArray(array);
    console.log(array);

    
    for ( let j = 1; j <= rows; j++) {
      tableTag += '<tr>';
      for ( let i = 1; i <= columns; i++) {
        tableTag += ('<td>'+
        '<div>'+ i + ',' + j +'</div>'+'</td>');
      }
      tableTag += '</tr>';
    }
  setResult(tableTag+'</table>');
  };
  return (
    <>
      <RandomSeats 
      createTable={createTable} 
      tableTag={result} 
      isSeatHidden={isSeatHidden}
      setIsSeatHidden={setIsSeatHidden}/>
    </>
  );
};

export default RandomSeatsContainer;
