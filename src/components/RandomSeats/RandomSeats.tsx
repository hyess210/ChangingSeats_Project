import React, { useState, ChangeEvent } from 'react';
import RANDOMSEATS_IMG from 'assets/images/RandomSeats/RANDOM_SEAT.png';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';
import NumberInput from 'components/Common/NumberInput/NumberInput';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RandomSeatsCard from './RandomSeatsCard/RandomSeatsCard';

const style = require('./RandomSeats.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IRandomSeatsProps {
  createTable: (arg0: number, arg1: number) => void;
}

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
  margin: '15px 0px 0px 140px',
  fontSize: '18px',
};

const RandomSeats = ({ createTable }: IRandomSeatsProps) => {
  const [rowNumber, setRowNumber] = useState<number>(1);
  const [columnNumber, setColumnNumber] = useState<number>(1);
  const [isRandom, setIsRandom] = useState<boolean>(true); // 0:random 1:number
  const [isCreateSeats, setIsCreateSeats] = useState<boolean>(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRandom(!isRandom);
  };

  return (
    <>
      <div className={cx('RandomSeats__left')}>
        <div className={cx('RandomSeats__left-top')}>
          <div style={{ textAlign: 'center' }}>
            줄(행)의 수
            <NumberInput
              minNumber={1}
              maxNumber={24}
              // onChange={
              //   (e: ChangeEvent<HTMLInputElement>) =>
              //     setRowNumber(Number(e.target.value))
              //   // console.log(e.target.value)
              // }
              value={rowNumber}
              setValue={setRowNumber}
            />
            <span style={{ margin: '20px' }}>
              칸(열)의 수
              <NumberInput
                minNumber={1}
                maxNumber={10}
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //   setColumnNumber(Number(e.target.value))
                // }
                value={columnNumber}
                setValue={setColumnNumber}
              />
            </span>
          </div>
          <div className={cx('RandomSeats__left-top-radio')}>
            랜덤 숫자
            <Radio
              checked={isRandom}
              onChange={handleRadioChange}
              value={isRandom}
              name="radio-random"
            />
            숫자 정렬
            <Radio
              checked={!isRandom}
              onChange={handleRadioChange}
              value={isRandom}
              name="radio-number"
            />
          </div>
        </div>
        <div className={cx('RandomSeats__left-bottom')}>
          <img src={RANDOMSEATS_IMG} alt="자리 뽑기" />
          {isCreateSeats ? (
            <Button
              children="다시 생성"
              customStyle={buttonCustomStyle}
              handleFunction={() => createTable(rowNumber, columnNumber)}
            />
          ) : (
            <Button
              children="자리 생성"
              customStyle={buttonCustomStyle}
              handleFunction={() => setIsCreateSeats(true)}
            />
          )}
        </div>
      </div>

      <div className={cx('RandomSeats__right')}>
        {isCreateSeats ? (
          <RandomSeatsCard
            createTable={createTable}
            rows={rowNumber}
            columns={columnNumber}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default RandomSeats;
