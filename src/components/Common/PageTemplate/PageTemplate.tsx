import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./PageTemplate.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IPageTemplateProps {
  children?: ReactNode;
}

const PageTemplate = ({ children }: IPageTemplateProps) => {
  return (
    <div className={cx('PageTemplate')}>
      <nav className={cx('PageTemplate__header')}>
        <Link to="/">자리 바꿔주세요!</Link>
      </nav>
      {children && children}
    </div>
  );
};

export default PageTemplate;
