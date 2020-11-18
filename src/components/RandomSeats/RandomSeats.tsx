import React, { useState, ChangeEvent,Dispatch, SetStateAction } from 'react';
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
  tableTag: string;
  isSeatHidden: boolean;
  setIsSeatHidden: Dispatch<SetStateAction<boolean>>;
  isRandom: boolean;
  setIsRandom: Dispatch<SetStateAction<boolean>>;
}

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
  margin: '15px 0px 0px 140px',
  fontSize: '18px',
};

const RandomSeats = ({ 
  createTable, 
  tableTag, 
  isSeatHidden, 
  setIsSeatHidden,
  isRandom,
  setIsRandom
 }: IRandomSeatsProps) => {
  const [rowNumber, setRowNumber] = useState<number>(1);
  const [columnNumber, setColumnNumber] = useState<number>(1);
  const [isCreateSeats, setIsCreateSeats] = useState<boolean>(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRandom(!isRandom);
  };

  const handleCreateSeat = () => {
    setIsCreateSeats(!isCreateSeats);
    if (columnNumber <= 1 && rowNumber <= 1) {
      alert('가로줄과 세로줄은 1보다 커야 합니다.');
      setIsCreateSeats(false);
    } else
    createTable(rowNumber,columnNumber);
  }
  
  const handleAgainCreateSeat = () => {
    setRowNumber(1);
    setColumnNumber(1);
    setIsCreateSeats(false);
  }

  return (
    <>
      <div className={cx('RandomSeats__left')}>
        <div className={cx('RandomSeats__left-top')}>
          <div className={cx('RandomSeats__left-top-des')}>
            <p style={{ color: '#f28b30' }}>
              교실의 책상 가로 줄과 세로 줄을 입력해주세요.
            </p>
            <p style={{ color: '#d9d1c7' }}>
              책상을 생성한 후 자리를 정합니다. <br />
              세로 줄 최대 숫자는 24, 가로 줄 최대 숫자는 10 입니다.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            세로줄의 수
            <NumberInput
              minNumber={1}
              maxNumber={24}
              value={rowNumber}
              setValue={setRowNumber}
              isBlock={isCreateSeats}
            />
            <span style={{ margin: '20px' }}>
              가로줄의 수
              <NumberInput
                minNumber={1}
                maxNumber={10}
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //   setColumnNumber(Number(e.target.value))
                // }
                value={columnNumber}
                setValue={setColumnNumber}
                isBlock={isCreateSeats}
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
              children="다시 시작"
              customStyle={buttonCustomStyle}
              handleFunction={() => handleAgainCreateSeat()}
            />
          ) : (
            <Button
              children="자리 생성"
              customStyle={buttonCustomStyle}
              handleFunction={() => handleCreateSeat()}
            />
          )}
        </div>
      </div>

      <div className={cx('RandomSeats__right')}>
        {isCreateSeats ? (
          <RandomSeatsCard
            isSeatHidden={isSeatHidden}
            setIsSeatHidden={setIsSeatHidden}
            isRandom={isRandom}
            createTable={createTable}
            rows={rowNumber}
            columns={columnNumber}
            tableTag={tableTag}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default RandomSeats;
