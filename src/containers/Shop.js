import React from 'react';
// Shop = List>Item + Search
import {Search} from '../components/Search';
import {List} from '../components/List';
import {itemOperations} from '../models/itemoperations.js';

export class Shop extends Component {
    constructor(props){
        super(props);
        // Setup the initial state for the shop
        this.itemList = itemOperations.loadItems();
    }
    render(){
        return(<div><List items={this.itemList}></List></div>)
    }
}