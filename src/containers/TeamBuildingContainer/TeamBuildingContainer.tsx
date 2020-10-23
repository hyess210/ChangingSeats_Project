import React, { useState } from 'react';
import TeamBuilding from 'components/TeamBuilding/TeamBuilding';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('components/TeamBuilding/TeamBuildingCard/TeamBuildingCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

const TeamBuildingContainer = () => {
  // const [result, setResult] = useState<string>('');
  // const [isSeatHidden, setIsSeatHidden] = useState<boolean>(false);
  // const [seatValueArray, setSeatValueArray] = useState<number[]>([]);

  // const createTeamSeat = (
  //   studentNumber: number, 
  //   teamNumber: number, 
  //   memberNumber: number) => {
  //     return (
  //       <div>
          
  //       </div>
  //     )
  //   }
  return (
    <>
      <TeamBuilding />
    </>
  );
};

export default TeamBuildingContainer;
