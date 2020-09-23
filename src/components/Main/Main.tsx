import React from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

import MAIN_RIGHT from 'assets/images/Main/Team.png';

const style = require('./Main.scss');
const cx: ClassNamesFn = classNames.bind(style);

const buttonCustomStyle = {
  width: '6rem',
  height: '2rem',
  margin: '5px',
  fontSize: '18px',
};

const Main = () => {
  return (
    <>
      <div className={cx('Main')}>
        <div className={cx('Main__contentBox')}>
          <div className={cx('Main__contentBox-left')}>
            <h1>
              선생님 우리반
              <br />
              자리 언제 바꿔요?
            </h1>
            <p>
              선생님! 아직도 칠판에 적고, 종이에 써서 자리를 바꾸고 계세요?
              <br />
              이제는 그럴 필요 없이 '자리 바꿔주세요!'와 함께
              <br />
              간편하게, 재미있게 자리를 바꿔주세요.
            </p>
            <ul>
              <li>
                <Button children="자리 뽑기" customStyle={buttonCustomStyle} />
              </li>
              <li>
                <Button children="제비 뽑기" customStyle={buttonCustomStyle} />
              </li>
              <li>
                <Button
                  children="모둠 정하기"
                  customStyle={buttonCustomStyle}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('Main__contentBox-right')}>
          <MAIN_RIGHT />
        </div>
      </div>
    </>
  );
};

export default Main;
