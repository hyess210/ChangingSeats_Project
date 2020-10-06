import React from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/RandomSeats/RandomSeatsCard/RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const RandomSeatsContainer = () => {
  let rowTable: string = '';
  let columnTable: string = '';

  const createTable = (rows: number, columns: number) => {
    console.log(rows, columns);
    const createRows = () => {
      for (let j = 1; j <= rows; j++) {
        rowTable += <td className={cx('RandomSeatsCard__card-box')}>{j}</td>;
      }
    };
    const createColumns = () => {
      createRows();
      for (let i = 1; i <= columns; i++) {
        columnTable += <tr>{rowTable}</tr>;
      }
    };
    createColumns();
    console.log(rowTable, columnTable);
    return <table className={cx('RandomSeatsCard__card')}>{columnTable}</table>;
  };
  return (
    <>
      <RandomSeats createTable={createTable} />
    </>
  );
};

export default RandomSeatsContainer;
