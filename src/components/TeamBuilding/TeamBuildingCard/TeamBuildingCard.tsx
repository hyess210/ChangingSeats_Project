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
    
    const TeamCard = () => {
        return (
            <div className={cx('TeamBuildingCard__wrap')}>
                1
            </div>
        )
    }
    return (
    <>
    <div className={cx('TeamBuildingCard')}>
        <div className={cx('TeamBuildingCard__des')}>
        <h2 style={{ color: '#f28b30' }}>모둠 생성 완료!</h2>
        <p>모둠을 생성하였습니다. <br/>
        모둠을 클릭해서 팀원을 확인하세요.</p>
        </div>
        <TeamCard />
    </div>
    </>
    )
}

export default TeamBuildingCard;