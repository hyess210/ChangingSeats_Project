import React, { useState } from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';

const RandomSeatsContainer = () => {
    let tableTag: string = '<table>';
    const [result, setResult] = useState<string>('');
    const [isSeatHidden, setIsSeatHidden] = useState<boolean>(false);
    const [seatValueArray, setSeatValueArray] = useState<number[]>([]);

  const createTable = (rows: number, columns: number) => {
    const studentNumber:number = rows * columns;
    const searchDuplicate = ( num: number) => {
      console.log(num);
      for(let k = 0; k <= seatValueArray.length; k++) {
        if (num === seatValueArray[k]) {  
          return '';
        } else {
          setSeatValueArray([...seatValueArray, num])
          return num;
        }
      }
    }
    
    for ( let j = 1; j <= rows; j++) {
      tableTag += '<tr>';
      for ( let i = 1; i <= columns; i++) {
        tableTag += ('<td>'+
        '<div>'+
        (isSeatHidden ?
        searchDuplicate(Math.floor(Math.random()*studentNumber + 1)) : '')
        +'</div>'+'</td>');
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
