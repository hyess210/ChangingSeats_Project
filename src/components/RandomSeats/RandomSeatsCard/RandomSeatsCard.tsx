import React, { useState, ChangeEvent } from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

const style = require('./RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IRandomSeatsCardProps {
  createTable: (arg0: number, arg1: number) => void;
  rows: number;
  columns: number;
}

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
  margin: '18px 0px 0px 0px',
  fontSize: '18px',
};

const RandomSeatsCard = ({
  createTable,
  rows,
  columns,
}: IRandomSeatsCardProps) => {
  return (
    <>
      <div className={cx('RandomSeatsCard')}>
        <div className={cx('RandomSeatsCard__base')}>교탁</div>
        <div className={cx('RandomSeatsCard__seats')}>
          {createTable(rows, columns)}
          {/* <table className={cx('RandomSeatsCard__card')}>
          <tr>
            <th>20</th>
          </tr>
        </table> */}
        </div>
        <Button
          children="자리 공개"
          customStyle={buttonCustomStyle}
          appearance="outline"
          // handleFunction={() => }
        />
        <span style={{ float: 'right' }}>
          <Button
            children="다시 배치"
            customStyle={buttonCustomStyle}
            appearance="disable"
            // handleFunction={() => }
          />
        </span>
      </div>
    </>
  );
};

export default RandomSeatsCard;
