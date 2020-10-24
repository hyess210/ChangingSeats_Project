import React, { useState } from 'react';

import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./TeamBuildingCard.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface ITeamBuildingCardProps {
    studentNumber: number;
    memberNumber: number;
    teamNumber: number;
}

const TeamBuildingCard = ({
    studentNumber,
    memberNumber,
    teamNumber
}: ITeamBuildingCardProps) => {

    const TeamCardMember = () => {
        return (
            <div className={cx('TeamBuildingCard__wrap')}></div>
        )
    }
    
    const TeamCard = () => {
        return (
            <div className={cx('TeamBuildingCard__wrap')}>
            </div>
        )
    }
    return (
    <>
    <div>
        <TeamCard />
    </div>
    </>
    )
}

export default TeamBuildingCard;