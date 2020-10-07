import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./NavBar.scss');
const cx: ClassNamesFn = classNames.bind(style);

const NavBar = () => {
  return (
    <div className={cx('NavBar')}>
      <Link to="/random-seats">자리 뽑기</Link>
      <Link to="card-select">제비 뽑기</Link>
    </div>
  );
};

export default NavBar;
