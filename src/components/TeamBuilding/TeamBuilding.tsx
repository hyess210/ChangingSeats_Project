import React, { useState } from 'react';
import TEAM_BUILDING_IMG from 'assets/images/TeamBuilding/TEAM_BUILDING.png';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';
import NumberInput from 'components/Common/NumberInput/NumberInput';

const style = require('./TeamBuilding.scss');
const cx: ClassNamesFn = classNames.bind(style);

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
  margin: '15px 0px 0px 140px',
  fontSize: '18px',
};

const TeamBuilding = () => {
  const [studentNumber, setStudentNumber] = useState<number>(2);
  const [teamNumber, setTeamNumber] = useState<number>(2);
  const [memberNumber, setMemberNumber] = useState<number>(1);

  return (
    <>
      <div className={cx('TeamBuilding__left')}>
        <div className={cx('TeamBuilding__left-top')}>
          <div className={cx('TeamBuilding__left-top-des')}>
            <p style={{ color: '#f28b30' }}>
              학생 수와 뽑아야 하는 모둠 수를 입력해주세요.
            </p>
            <p style={{ color: '#d9d1c7' }}>
              학생 수 대로 모둠을 구성합니다. <br />
              모둠 최소 개수는 2개이며 최대 개수는 20개 입니다.
            </p>
          </div>
        </div>
        <div className={cx('TeamBuilding__left-bottom')}>
          <div>
            학생 수
            <NumberInput
              minNumber={2}
              maxNumber={80}
              value={studentNumber}
              setValue={setStudentNumber}
              isBlock={true}
            />
            <span style={{ marginLeft: '20px' }}>
              모둠 수
              <NumberInput
                minNumber={2}
                maxNumber={20}
                value={teamNumber}
                setValue={setTeamNumber}
                isBlock={true}
              />
            </span>
            <span style={{ marginLeft: '20px' }}>
              모둠 당 학생 수
              <NumberInput
                minNumber={1}
                maxNumber={30}
                value={memberNumber}
                setValue={setMemberNumber}
                isBlock={true}
              />
            </span>
          </div>
          <img src={TEAM_BUILDING_IMG} alt="모둠 정하기" />
          <Button children="뽑기 시작" customStyle={buttonCustomStyle} />
        </div>
      </div>

      <div className={cx('TeamBuilding__right')}></div>
    </>
  );
};

export default TeamBuilding;
