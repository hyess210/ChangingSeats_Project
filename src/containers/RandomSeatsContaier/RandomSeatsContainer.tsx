import React, { useState } from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/RandomSeats/RandomSeatsCard/RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const RandomSeatsContainer = () => {
  const [tag, setTag] = useState<JSX.Element[]>([]);
  const createTable = (rows: number, columns: number) => {
    console.log(rows, columns);
    const tdTable = () => {
      for(let i = 0; i<= columns; i++) {
        console.log('p');
      // return <td>{i}</td>
      }
    }
    // let tag: string = '';
    for (let j = 1; j <= rows; j++) {
        console.log('p');
    setTag([...tag, <tr></tr>]);
    }
  };
  return (
    <>
      <RandomSeats createTable={createTable} />
    </>
  );
};

export default RandomSeatsContainer;
