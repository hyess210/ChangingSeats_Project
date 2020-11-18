import React, { useState, Dispatch, SetStateAction } from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

const style = require('./RandomSeatsCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IRandomSeatsCardProps {
  createTable: (arg0: number, arg1: number) => void;
  rows: number;
  columns: number;
  tableTag: string;
  isSeatHidden: boolean;
  setIsSeatHidden: Dispatch<SetStateAction<boolean>>;
  isRandom: boolean;
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
  tableTag,
  isSeatHidden,
  setIsSeatHidden,
  isRandom
}: IRandomSeatsCardProps) => {
  const handleShowSeatClick = () => {
    setIsSeatHidden(true);
    createTable(rows,columns);
  }
  return (
    <>
      <div className={cx('RandomSeatsCard')}>
        <div className={cx('RandomSeatsCard__base')}>교탁</div>
        <div className={cx(isSeatHidden ? 'RandomSeatsCard__seats' 
        : 'RandomSeatsCard__seats-hidden')}
          dangerouslySetInnerHTML={{__html: tableTag}}>
        </div>
        {
          isSeatHidden ?
          <Button
            children="자리 공개"
            customStyle={buttonCustomStyle}
            appearance="disable"
            handleFunction={() => handleShowSeatClick()}
          /> :
          <Button
            children="자리 공개"
            customStyle={buttonCustomStyle}
            appearance="outline"
            handleFunction={() => handleShowSeatClick()}
          />
        }
        {
          isSeatHidden && isRandom ?
        <span style={{ float: 'right' }}>
          <Button
            children="다시 배치"
            customStyle={buttonCustomStyle}
            appearance="outline"
            handleFunction={() => createTable(rows,columns)}
          />
        </span> :
        <span style={{ float: 'right' }}>
          <Button
            children="다시 배치"
            customStyle={buttonCustomStyle}
            appearance="disable"
          />
        </span>
        }
      </div>
    </>
  );
};

export default RandomSeatsCard;
