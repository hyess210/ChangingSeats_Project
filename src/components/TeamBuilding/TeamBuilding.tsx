import React, { Dispatch, SetStateAction, useState } from 'react';
import TEAM_BUILDING_IMG from 'assets/images/TeamBuilding/TEAM_BUILDING.png';
import TeamBuildingCard from './TeamBuildingCard/TeamBuildingCard';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Button from 'components/Common/Button/Button';
import NumberInput from 'components/Common/NumberInput/NumberInput';

const style = require('./TeamBuilding.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ITeamBuildingProps {
  count:number;
  studentNumber: number;
  setStudentNumber: Dispatch<SetStateAction<number>>;
  teamNumber: number;
  setTeamNumber: Dispatch<SetStateAction<number>>;
  studentArray: number[];
}

const buttonCustomStyle = {
  width: '6.5rem',
  height: '2.5rem',
  margin: '15px 0px 0px 0px',
  fontSize: '18px',
};

const TeamBuilding = ({
  count,
  studentNumber,
  setStudentNumber,
  teamNumber,
  setTeamNumber,
  studentArray
}: ITeamBuildingProps) => {
  const [isBlock, setIsBlock] = useState<boolean>(false);

  const handleCreateTeam = () => {
    setIsBlock(!isBlock);
  }

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
              isBlock={isBlock}
            />
            <span style={{ marginLeft: '20px' }}>
              모둠 수
              <NumberInput
                minNumber={2}
                maxNumber={20}
                value={teamNumber}
                setValue={setTeamNumber}
                isBlock={isBlock}
              />
            </span>
          </div>
          <img src={TEAM_BUILDING_IMG} alt="모둠 정하기" />
          {
            isBlock ?
            <Button 
            children="다시 시작" 
            customStyle={buttonCustomStyle}
            handleFunction={() => handleCreateTeam()}
             /> :
            <Button 
            children="뽑기 시작" 
            customStyle={buttonCustomStyle}
            handleFunction={() => handleCreateTeam()}
            />
          }
        </div>
      </div>

      <div className={cx('TeamBuilding__right')}>
        {
          isBlock ? 
          <TeamBuildingCard
          count={count}
          studentNumber={studentNumber}
          teamNumber={teamNumber}
          studentArray={studentArray}
          /> :
          <></>
        }
      </div>
    </>
  );
};

export default TeamBuilding;
