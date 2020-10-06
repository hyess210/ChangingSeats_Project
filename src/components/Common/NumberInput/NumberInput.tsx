import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./NumberInput.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface INumberInput {
  minNumber: number;
  maxNumber: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // value: number;
}

const NumberInput = ({
  minNumber,
  maxNumber,
  onChange,
}: // value,
INumberInput) => {
  return (
    <input
      type="number"
      min={minNumber}
      max={maxNumber}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        console.log(e.target.value)
      }
      // value={value}
      className={cx(`NumberInput`)}
    />
  );
};

export default NumberInput;
