import React, { useState, ChangeEvent } from 'react';
import RANDOMSEATS_IMG from 'assets/images/RandomSeats/RANDOM_SEAT.png';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';
import NumberInput from 'components/Common/NumberInput/NumberInput';

const style = require('./RandomSeats.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IRandomSeatsProps {}

const [linenumber, setLineNumber] = useState<number>(0);

const buttonCustomStyle = {
  width: '6rem',
  height: '2rem',
  margin: '15px 0px 0px 140px',
  fontSize: '18px',
};

const RandomSeats = () => {
  return (
    <>
      <div className={cx('RandomSeats__left')}>
        <div className={cx('RandomSeats__left-top')}>
          줄(행)의 수
          <NumberInput
            minNumber={1}
            maxNumber={10}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setLineNumber(Number(e.target.value))
            }
          />
        </div>
        <div className={cx('RandomSeats__left-bottom')}>
          <img src={RANDOMSEATS_IMG} alt="자리 뽑기" />
          <Button children="자리 생성" customStyle={buttonCustomStyle} />
        </div>
      </div>
      <div className={cx('RandomSeats__right')}></div>
    </>
  );
};

export default RandomSeats;
