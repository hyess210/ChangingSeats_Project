import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./Radio.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IRadioProps {
  title: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Radio = ({ title, onChange }: IRadioProps) => {
  return (
    <form>
      {title}
      <input type="radio" className={cx(`Radio`)} />
      <span className={cx(`Radio-checkmark`)}></span>
    </form>
  );
};

export default Radio;
