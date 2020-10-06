import React from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/RandomSeats/RandomSeatsCard/RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const RandomSeatsContainer = () => {
  let td: string;
  let tr;
  const createTable = (rows: number, columns: number) => {
    console.log(rows, columns);
    const createRows = () => {
      for (let j = 1; j <= rows; j++) {
        console.log('row create');
        return (td += <td className={cx('RandomSeatsCard__card-box')}>{j}</td>);
      }
    };
    const createColumns = () => {
      for (let i = 1; i <= columns; i++) {
        return <tr>{createRows()}</tr>;
      }
    };
    return (
      <table className={cx('RandomSeatsCard__card')}>{createColumns()}</table>
    );
  };
  return (
    <>
      <RandomSeats createTable={createTable} />
    </>
  );
};

export default RandomSeatsContainer;
