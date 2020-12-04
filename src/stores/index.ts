import CardSelectStore from './CardSelect/CardSelectStore';
import TeamBuildingStore from './TeamBuilding/TeamBuildingStore';

const stores: object = {
  CardSelectStore: new CardSelectStore(),
  TeamBuildingStore: new TeamBuildingStore(),
};

export default stores;
