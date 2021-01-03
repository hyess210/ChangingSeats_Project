import React, { useState } from "react";
import TeamBuilding from "components/TeamBuilding/TeamBuilding";
import useStores from "lib/useStores";

import classNames from "classnames";
import { ClassNamesFn } from "classnames/types";

const style = require("components/TeamBuilding/TeamBuildingCard/TeamBuildingCard.scss");
const cx: ClassNamesFn = classNames.bind(style);

const TeamBuildingContainer = () => {
  const { store } = useStores();
  let tableTag: string = "<div>";
  const [result, setResult] = useState<string>("");
  const [studentNumber, setStudentNumber] = useState<number>(2);
  const [teamNumber, setTeamNumber] = useState<number>(2);
  const { studentArray } = store.TeamBuildingStore;
  let array: number[] = [];
  let count = 0;

  const getRandomValue = () => {
    count++;
    return array[count];
  };

  const createTeam = (studentNumber: number) => {
    const getRandomArray = (array: number[]) => {
      let temp = array.length;
      let current = array.length;
      let top = array.length;

      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          temp = array[current];
          array[current] = array[top];
          array[top] = temp;
        }
      }
      return array;
    };

    array = getRandomArray(array);

    for (let j = 1; j <= teamNumber; j++) {
      tableTag += "<ul>";
      for (let i = 1; i <= studentNumber; i++) {
        tableTag += "<li>" + getRandomValue() + "</li>";
      }
      tableTag += "</ul>";
    }
    setResult(tableTag + "</div>");
  };

  return (
    <>
      <TeamBuilding
        count={count}
        studentNumber={studentNumber}
        setStudentNumber={setStudentNumber}
        teamNumber={teamNumber}
        setTeamNumber={setTeamNumber}
        studentArray={studentArray}
        createTeam={createTeam}
        result={result}
      />
    </>
  );
};

export default TeamBuildingContainer;
