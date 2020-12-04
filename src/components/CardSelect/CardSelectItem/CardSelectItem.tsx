import React from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./CardSelectItem.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ICardSelectItemProps {
  startNumber: number;
  endNumber: number;
  cardValue: number;
  onClick: () => void;
}

const CardSelectItem = ({
  startNumber,
  endNumber,
  cardValue,
  onClick,
}: ICardSelectItemProps) => {
  const filterCardValue = (value: number) => {
    if (value === -1) {
      return '?';
    } else if (value === -2) {
      return '뽑기를 모두 뽑았습니다.';
    } else {
      return value;
    }
  };

  const AllCardBox = () => {
    return (
      <div className={cx('CardSelectItem__allCard')}>
        <div className={cx('CardSelectItem__allCard-card')}></div>
      </div>
    );
  };

  const CardBox = () => {
    return (
      <div
        className={cx('CardSelectItem__card-active')}
        onClick={() => onClick()}
      >
        <div
          className={cx(
            'CardSelectItem__card-line',
            cardValue === -2 && 'CardSelectItem__card-line-disable'
          )}
        >
          {<>{filterCardValue(cardValue)}</>}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={cx('CardSelectItem')}>
        <div className={cx('CardSelectItem__des')}>
          <h2 style={{ color: '#f28b30' }}>제비뽑기 생성 완료 !</h2>
          <p>
            뽑기를 모두 생성하였습니다.
            <br />
            카드를 클릭하여 한장씩 뽑아보세요.
          </p>
        </div>

        <div>
          <CardBox />
        </div>
        {/* <Button children="한번에 공개하기" customStyle={buttonCustomStyle} /> */}
      </div>
    </>
  );
};

export default CardSelectItem;
