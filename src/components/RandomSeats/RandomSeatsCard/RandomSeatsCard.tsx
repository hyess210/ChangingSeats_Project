import React, { useState, ChangeEvent } from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

const style = require('./RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IRandomSeatsCardProps {}

const buttonCustomStyle = {
  width: '6rem',
  height: '2rem',
  margin: '15px 0px 0px 140px',
  fontSize: '18px',
};

const RandomSeatsCard = () => {
  const SeatCard = () => {
    return (
      <li className={cx('RandomSeatsCard__list')}>
        <div>20</div>
      </li>
    );
  };
  return (
    <>
      <div className={cx('RandomSeatsCard__base')}>교탁</div>
      <div className={cx('RandomSeatsCard__seats')}>
        <ul>
          <SeatCard />
          <SeatCard />
          <SeatCard />
          <SeatCard />
          <SeatCard />
        </ul>
      </div>
    </>
  );
};

export default RandomSeatsCard;
