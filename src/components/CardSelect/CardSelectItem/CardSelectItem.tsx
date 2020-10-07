import React from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

const style = require('./CardSelectItem.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ICardSelectItemProps {
  value: number;
}

const buttonCustomStyle = {
  width: '8.5rem',
  height: '2.5rem',
  margin: '18px 0px 0px 0px',
  fontSize: '18px',
};

const CardSelectItem = ({ value }: ICardSelectItemProps) => {
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
        <div
          className={cx('CardSelectItem__card-initial', {
            'CardSelectItem__card-active': value,
          })}
        >
          {value}
        </div>
        <Button children="한번에 공개하기" customStyle={buttonCustomStyle} />
      </div>
    </>
  );
};

export default CardSelectItem;
