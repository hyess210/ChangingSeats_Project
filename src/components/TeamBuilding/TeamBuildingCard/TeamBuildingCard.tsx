import React, { useState } from 'react';

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
    const [studentNumberArray, setStudentNumberArray] = useState<number[]>([]);

    for(let i = 0; i <= studentNumber; i++) {
        setStudentNumberArray([...studentNumberArray, i]);
    }

    const TeamCard = () => {
        return (
            <div>
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