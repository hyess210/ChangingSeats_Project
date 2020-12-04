import React, { useState } from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./TeamBuildingCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ITeamBuildingCardProps {
  count: number;
  studentNumber: number;
  teamNumber: number;
  studentArray: number[];
}

const TeamBuildingCard = ({
  count,
  studentNumber,
  teamNumber,
  studentArray,
}: ITeamBuildingCardProps) => {
  const [studentValue, setStudentValue] = useState<number>(0);

  const TeamCard = () => {
    setStudentValue(studentArray[count]);
    
    const TeamCardValue = () => {
      return <li>{studentValue}</li>;
    };
    
    return (
      <div className={cx('TeamBuildingCard__wrap')}>
        <ul>
            <TeamCardValue />
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className={cx('TeamBuildingCard')}>
        <div className={cx('TeamBuildingCard__des')}>
          <h2 style={{ color: '#f28b30' }}>모둠 생성 완료!</h2>
          <p>
            모둠을 생성하였습니다. <br />
            모둠을 클릭해서 팀원을 확인하세요.
          </p>
        </div>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </>
  );
};

export default TeamBuildingCard;
