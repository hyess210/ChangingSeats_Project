import React, { useState } from 'react';
import TeamBuilding from 'components/TeamBuilding/TeamBuilding';
import useStores from 'lib/useStores';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/TeamBuilding/TeamBuildingCard/TeamBuildingCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const TeamBuildingContainer = () => {
	const { store } = useStores();
  const [studentNumber, setStudentNumber] = useState<number>(2);
  const [teamNumber, setTeamNumber] = useState<number>(2);
  const { 
    count,
    studentArray,
  } = store.TeamBuildingStore;

  return (
    <>
      <TeamBuilding
      count={count}
      studentNumber={studentNumber}
      setStudentNumber={setStudentNumber}
      teamNumber={teamNumber}
      setTeamNumber={setTeamNumber}
      studentArray={studentArray}
      />
    </>
  );
};

export default TeamBuildingContainer;
