import React, { useState } from 'react';
import TeamBuilding from 'components/TeamBuilding/TeamBuilding';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/TeamBuilding/TeamBuildingCard/TeamBuildingCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const TeamBuildingContainer = () => {
  const [studentNumber, setStudentNumber] = useState<number>(2);
  const [teamNumber, setTeamNumber] = useState<number>(2);
  const [memberNumber, setMemberNumber] = useState<number>(1);
  return (
    <>
      <TeamBuilding
      studentNumber={studentNumber}
      setStudentNumber={setStudentNumber}
      teamNumber={teamNumber}
      setTeamNumber={setTeamNumber}
      memberNumber={memberNumber}
      setMemberNumber={setMemberNumber}
      />
    </>
  );
};

export default TeamBuildingContainer;
