import React from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

const style = require('./RandomSeats.scss');
const cx: ClassNamesFn = classNames.bind(style);

const RandomSeats = () => {
  return (
    <>
      <div className={cx('RandomSeats__left')}></div>
      <div className={cx('RandomSeats__right')}></div>
    </>
  );
};

export default RandomSeats;
