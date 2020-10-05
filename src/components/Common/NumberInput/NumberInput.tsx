import React, { ChangeEvent } from 'react';

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
    />
  );
};

export default NumberInput;
