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

const settingValue = ( e : ChangeEvent<HTMLInputElement>) => {
  !value ? setValue(0) : setValue(parseInt(e.target.value))
}

  return (
    <input
      type="number"
      min={minNumber}
      max={maxNumber}
      onChange={(e: ChangeEvent<HTMLInputElement>) => settingValue(e)
      }
      value={value}
      className={cx('NumberInput', {
        NumberInput__block: isBlock,
      })}
    />
  );
};

export default NumberInput;
