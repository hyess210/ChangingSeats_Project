import React, { useState, ChangeEvent } from 'react';
import CARDSELECT_IMG from 'assets/images/CardSelect/CARD_SELECT.png';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';
import NumberInput from 'components/Common/NumberInput/NumberInput';

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
  return (
    <>
      <div className={cx('CardSelect__left')}>
        {/* <div className={cx('CardSelect__left-top')}>
          <div style={{ textAlign: 'center' }}>
            줄(행)의 수
            <NumberInput
              minNumber={1}
              maxNumber={24}
              value={rowNumber}
              setValue={setRowNumber}
            />
            <span style={{ margin: '20px' }}>
              칸(열)의 수
              <NumberInput
                minNumber={1}
                maxNumber={10}
                value={columnNumber}
                setValue={setColumnNumber}
              />
            </span>
          </div>
        </div> */}
        <div className={cx('CardSelect__left-bottom')}>
          <img src={CARDSELECT_IMG} alt="자리 뽑기" />
        </div>
      </div>

      <div className={cx('CardSelect__right')}></div>
    </>
  );
};

export default CardSelect;
