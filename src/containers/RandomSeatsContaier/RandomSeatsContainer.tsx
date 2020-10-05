import React from 'react';
import RandomSeats from 'components/RandomSeats/RandomSeats';

const RandomSeatsContainer = () => {
  const createTable = (rows: number, columns: number) => {
    console.log(rows, columns);
    const createRows = () => {
      for (let j = 1; j <= rows; j++) {
        return <td>{j}</td>;
      }
    };
    const createColumns = () => {
      for (let i = 1; i <= columns; i++) {
        return <tr>{createRows}</tr>;
      }
    };
    return <table>{createColumns}</table>;
  };
  return (
    <>
      <RandomSeats createTable={createTable} />
    </>
  );
};

export default RandomSeatsContainer;
