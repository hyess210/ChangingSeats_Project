import React, { useState, ChangeEvent } from 'react';
import CARDSELECT_IMG from 'assets/images/CardSelect/CARD_SELECT.png';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';
import NumberInput from 'components/Common/NumberInput/NumberInput';
import CardSelectItem from './CardSelectItem/CardSelectItem';

const style = require('./CardSelect.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ICardSelectProps {}

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
  margin: '15px 0px 0px 140px',
  fontSize: '18px',
};

const CardSelect = () => {
  const [startNumber, setStartNumber] = useState<number>(0);
  const [endNumber, setEndNumber] = useState<number>(0);
  const [isCreateCard, setIsCreateCard] = useState<boolean>(false);
  const [cardValue, setCardValue] = useState<number>(-1);

  return (
    <>
      <div className={cx('CardSelect__left')}>
        <div className={cx('CardSelect__left-top')}>
          <div className={cx('CardSelect__left-top-des')}>
            <p style={{ color: '#f28b30' }}>
              뽑기가 시작될 숫자와 끝날 숫자를 입력해주세요.
            </p>
            <p style={{ color: '#d9d1c7' }}>
              시작하는 숫자와 끝나는 숫자 사이의 수를 랜덤으로 뽑습니다. <br />
              최소 숫자는 0이며 최대 숫자는 99입니다.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            시작하는 숫자
            <NumberInput
              minNumber={1}
              maxNumber={24}
              value={startNumber}
              setValue={setStartNumber}
            />
            <span style={{ margin: '20px' }}>
              끝나는 숫자
              <NumberInput
                minNumber={1}
                maxNumber={10}
                value={endNumber}
                setValue={setEndNumber}
              />
            </span>
          </div>
        </div>
        <div className={cx('CardSelect__left-bottom')}>
          <img src={CARDSELECT_IMG} alt="자리 뽑기" />
          {isCreateCard ? (
            <Button
              children="다시 시작"
              customStyle={buttonCustomStyle}
              handleFunction={() => setIsCreateCard(!isCreateCard)}
            />
          ) : (
            <Button
              children="뽑기 시작"
              customStyle={buttonCustomStyle}
              handleFunction={() => setIsCreateCard(!isCreateCard)}
            />
          )}
        </div>
      </div>

      <div className={cx('CardSelect__right')}>
        {isCreateCard ? (
          <CardSelectItem value={cardValue} endNumber={endNumber} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CardSelect;
