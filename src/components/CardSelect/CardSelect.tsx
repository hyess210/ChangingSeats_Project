import React, { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import CARDSELECT_IMG from 'assets/images/CardSelect/CARD_SELECT.png';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';
import NumberInput from 'components/Common/NumberInput/NumberInput';
import CardSelectItem from './CardSelectItem/CardSelectItem';

import useStores from 'lib/useStores';

const style = require('./CardSelect.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ICardSelectProps {
  startNumber: number;
  setStartNumber: Dispatch<SetStateAction<number>>;
  endNumber: number;
  setEndNumber: Dispatch<SetStateAction<number>>;
  cardValue: number;
  setCardValue: Dispatch<SetStateAction<number>>;
  getRandomValue: (arg0: number, arg1: number) => void;
  // selectedCardArray: number[];
  handleRandomCardValue: () => void;
}

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
  margin: '15px 0px 0px 140px',
  fontSize: '18px',
};

const CardSelect = ({
  startNumber,
  setStartNumber,
  endNumber,
  setEndNumber,
  cardValue,
  setCardValue,
  // selectedCardArray,
  getRandomValue,
  handleRandomCardValue,
}: ICardSelectProps) => {
  const { store } = useStores();
  const { IncreaseCount } = store.CardSelectStore;
  const [isCreateCard, setIsCreateCard] = useState<boolean>(false);

  const handleCreateCard = (startNumber: number, endNumber: number) => {
    if (startNumber > endNumber || startNumber === endNumber) {
      alert('시작하는 숫자보다 끝나는 숫자가 작거나 같을 수 없습니다.');
    } else if (endNumber > 99 || startNumber < 0) {
      alert('입력 가능한 숫자 범위를 벗어났습니다.');
    } else {
      getRandomValue(endNumber, startNumber);
      setIsCreateCard(!isCreateCard);
    }
  };

  const handleCreateCardAgain = () => {
    IncreaseCount(true);
    getRandomValue(endNumber, startNumber);
    setIsCreateCard(!isCreateCard);
    setStartNumber(0);
    setEndNumber(0);
    setCardValue(-1);
  };

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
              maxNumber={98}
              value={startNumber}
              setValue={setStartNumber}
              isBlock={isCreateCard}
            />
            <span style={{ margin: '20px' }}>
              끝나는 숫자
              <NumberInput
                minNumber={1}
                maxNumber={99}
                value={endNumber}
                setValue={setEndNumber}
                isBlock={isCreateCard}
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
              handleFunction={() => handleCreateCardAgain()}
            />
          ) : (
            <Button
              children="뽑기 시작"
              customStyle={buttonCustomStyle}
              handleFunction={() => handleCreateCard(startNumber, endNumber)}
            />
          )}
        </div>
      </div>

      <div className={cx('CardSelect__right')}>
        {isCreateCard ? (
          <CardSelectItem
            startNumber={startNumber}
            endNumber={endNumber}
            cardValue={cardValue}
            onClick={handleRandomCardValue}
            // selectedCardArray={selectedCardArray}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CardSelect;
