import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./NumberInput.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface INumberInput {
  minNumber: number;
  maxNumber: number;
  // onChange: any;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  isBlock: boolean;
}

const NumberInput = ({
  minNumber,
  maxNumber,
  value,
  setValue,
  isBlock,
}: INumberInput) => {
  return (
    <input
      type="number"
      min={minNumber}
      max={maxNumber}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setValue(parseInt(e.target.value))
      }
      value={value}
      className={cx('NumberInput', {
        NumberInput__block: isBlock,
      })}
    />
  );
};

export default NumberInput;
