import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';

import MAIN_LOGO from 'assets/images/Main/Team.png';

const style = require('./Main.scss');
const cx: ClassNamesFn = classNames.bind(style);

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
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
              선생님, 우리반
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
                <Link to="/random-seats">
                  <Button
                    children="자리 뽑기"
                    customStyle={buttonCustomStyle}
                  />
                </Link>
              </li>
              <li>
                <Link to="/card-select">
                  <Button
                    children="제비 뽑기"
                    customStyle={buttonCustomStyle}
                  />
                </Link>
              </li>
              <li>
                <Link to='/team-building'>
                <Button
                  children="모둠 정하기"
                  customStyle={buttonCustomStyle}
                />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('Main__contentBox-right')}>
          <img src={MAIN_LOGO} alt="자리바꿔주세요!" />
        </div>
      </div>
    </>
  );
};

export default Main;
