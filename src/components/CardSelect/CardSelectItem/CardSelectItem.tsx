import React from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

const style = require('./CardSelectItem.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ICardSelectItemProps {
  startNumber: number;
  endNumber: number;
  cardValue: number;
  onClick: () => void;
  selectedCardArray: number[];
}

const buttonCustomStyle = {
  width: '8.5rem',
  height: '2.5rem',
  margin: '18px 0px 0px 0px',
  fontSize: '18px',
};

const CardSelectItem = ({
  startNumber,
  endNumber,
  cardValue,
  onClick,
  selectedCardArray,
}: ICardSelectItemProps) => {
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
        className={cx('CardSelectItem__card-active', {
          'CardSelectItem__card-initial': cardValue === -1,
        })}
        onClick={() => onClick()}
      >
        {/* {cardValue === -1 ? (
          <div className={cx('CardSelectItem__card-line')}>?</div>
        ) : (
          <div className={cx('CardSelectItem__card-line')}>{cardValue}</div>
        )} */}
        <div className={cx('CardSelectItem__card-line')}>
          {cardValue === -1 ? <>?</> : <>{cardValue}</>}
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
        <CardBox />
        <Button children="한번에 공개하기" customStyle={buttonCustomStyle} />
      </div>
    </>
  );
};

export default CardSelectItem;
