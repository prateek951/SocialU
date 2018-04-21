import React from 'react';
import {Item} from './Item';

export const List = props => {
    // List is a collection of items
    return(<div>{props.items.map(item => <Item item={item}></Item>)}</div>)

}