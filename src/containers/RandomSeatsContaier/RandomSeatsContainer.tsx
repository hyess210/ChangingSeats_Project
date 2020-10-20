import React, { useState } from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/RandomSeats/RandomSeatsCard/RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const RandomSeatsContainer = () => {
    let tableTag: string = '<table>';
    // let result: string = '';
    const [result, setResult] = useState<string>('');
  const createTable = (rows: number, columns: number) => {
    for ( let j = 1; j <= rows; j++) {
      tableTag += '<tr>';
      for ( let i = 1; i <= columns; i++) {
        tableTag += ('<td>'+j+'</td>');
      }
      tableTag += '</tr>';
    }
  setResult(tableTag+'</table>');
    // return tableTag += '</table>';
  };
  console.log(result);
  return (
    <>
      <RandomSeats createTable={createTable} tableTag={result}/>
    </>
  );
};

export default RandomSeatsContainer;
