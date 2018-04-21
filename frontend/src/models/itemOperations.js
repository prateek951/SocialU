import {Item} from './item';
export const itemOperations = {

    itemList: [],

    loadItems(){
        var version = 4;
        for (let i = 1; i <=4; i++) {
            this.itemList.push(new Item(i,"Apple"+version,10000*i,"apple.jpg"));
            
        }
        return itemList;
    }


}