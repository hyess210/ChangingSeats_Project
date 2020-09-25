import React, { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames/bind';
import { ClassNamesFn } from 'classnames/types';
const style = require('./Button.scss');

const cx: ClassNamesFn = classNames.bind(style);

interface IButtonProps {
  handleFunction: () => void;
  appearance?: string;
  customStyle: {
    width?: string;
    height?: string;
    margin?: string;
    fontSize?: string | number;
  };
  type?: any;
  edgeType?: string;
  isLoading?: boolean;
  children?: ReactNode;
}

const Button = ({
  handleFunction,
  appearance,
  customStyle,
  type,
  edgeType,
  isLoading,
  children,
}: IButtonProps) => {
  const handleButtonClick = () => {
    if (isLoading) return;
    handleFunction();
  };

  return (
    <button
      type={type}
      className={cx(`button-${appearance} button-${edgeType}`)}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        if (isLoading) {
          event.preventDefault();
        }
        handleButtonClick();
      }}
      style={{
        width: customStyle.width,
        height: customStyle.height,
        margin: customStyle.margin,
      }}
    >
      {isLoading ? (
        <div className={cx('button-loadingWrap')}>
          <div className={cx('button-loadingWrap-spin')}></div>
          <span className={cx('button-loadingWrap-content')}>Loading</span>
        </div>
      ) : (
        <div
          className={cx('button-content')}
          style={{ fontSize: customStyle.fontSize }}
        >
          {children && children}
        </div>
      )}
    </button>
  );
};

Button.defaultProps = {
  content: 'Button',
  appearance: 'primary',
  customStyle: {
    width: '20%',
    height: '10%',
    fontSize: '18px',
    margin: '0',
  },
  type: 'button',
  handleFunction: () => {},
  edgeType: 'round',
  isLoading: false,
  loadingType: 'basic',
};

export default Button;
