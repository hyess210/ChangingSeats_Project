import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class CardSelectStore {
    @observable count:number = 0;
    @observable endNumber:number = 0;
    @observable startNumber:number = 0;
    @observable cardValueArray:number[] = [];
    @observable array:number[] = [];
    
    @action IncreaseCount(isEndLength: boolean) {
      isEndLength ? this.count = 0 :
      this.count++;
    }

    @action getCardValueArray(endNumber:number, startNumber:number) {    
        this.endNumber = endNumber;
        this.startNumber = startNumber; 
        for (let i = 0; i <= endNumber-(startNumber-1); i++) {
            this.cardValueArray[i] = i+1;
        }
    }

    @action getRandomValue(endNumber:number, startNumber:number) {
        this.getCardValueArray(endNumber, startNumber);
        this.array = this.cardValueArray;
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
        // return array;
        this.cardValueArray = this.array;
        console.log(this.cardValueArray);
    }
}

export default CardSelectStore;
