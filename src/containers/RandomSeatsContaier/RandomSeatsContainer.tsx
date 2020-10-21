import React, { useState } from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/RandomSeats/RandomSeatsCard/RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const RandomSeatsContainer = () => {
    let tableTag: string = '<table>';
    const [result, setResult] = useState<string>('');
    const [isSeatHidden, setIsSeatHidden] = useState<boolean>(false);

  const createTable = (rows: number, columns: number) => {
    const studentNumber:number = rows * columns;
    const seatTag: string = '';
    
    for ( let j = 1; j <= rows; j++) {
      tableTag += '<tr>';
      for ( let i = 1; i <= columns; i++) {
        tableTag += ('<td>'+
        '<div>'+
        (isSeatHidden ?
        Math.floor(Math.random()*studentNumber + 1) : '')
        +'</div>'+'</td>');
      }
      tableTag += '</tr>';
    }
  setResult(tableTag+'</table>');
  };
  console.log(result);
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
