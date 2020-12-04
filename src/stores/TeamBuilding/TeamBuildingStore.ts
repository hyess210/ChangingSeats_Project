import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class TeamBuildingStore {
    @observable count:number = 0;
    @observable studentArray: number[] = [];
    @observable array:number[] = [];
    
    @action IncreaseCount(isLengthEnd: boolean) {
        isLengthEnd ? this.count = 0 :
        this.count++;
      }

    @action getStudentArray(student:number) { 
        for (let i = 0; i <= student-1; i++) {
            this.studentArray[i] = i+1;
        }
    }

    @action getRandomStudent(student:number) {
        this.getStudentArray(student);
        this.array = this.studentArray;
        let temp = this.array.length;
        let current = this.array.length;
        let top = this.array.length;
    
        if(top) {
          while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            temp = this.array[current];
            this.array[current] = this.array[top];
            this.array[top] = temp;
          }
        }
        this.studentArray = this.array;
        console.log(this.studentArray);
    }


}

export default TeamBuildingStore;