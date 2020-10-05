import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./NumberInput.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface INumberInput {
  minNumber: number;
  maxNumber: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const NumberInput = ({ minNumber, maxNumber, onChange }: INumberInput) => {
  return (
    <input
      type="number"
      min={minNumber}
      max={maxNumber}
      onChange={() => onChange}
      className={cx(`NumberInput`)}
    />
  );
};

export default NumberInput;
