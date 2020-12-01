import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class CardSelectStore {
    @observable count:number= 0;
    @observable endNumber:number=0;
    @observable startNumber:number=0;
    @observable cardValueArray:number[] =[];
    
    @action getCardValueArray(endNumber:number, startNumber:number) {    
        this.endNumber = endNumber;
        this.startNumber = startNumber; 
        for (let i = 0; i <= endNumber-(startNumber-1); i++) {
            this.cardValueArray[i] = i+1;
        }
    }

    @action getRandomValue(array:number[]) {
        this.getCardValueArray(this.endNumber, this.startNumber);
        let temp = array.length;
        let current = array.length;
        let top = array.length;
    
        if(top) {
          while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            temp = array[current];
            array[current] = array[top];
            array[top] = temp;
          }
        }
        return array;
    }
}

export default CardSelectStore;
