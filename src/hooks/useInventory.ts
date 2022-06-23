import { useState } from 'react';
import { Inventory } from '../logic/classes/Inventory';

export const useInventory = <ItemType>(inventory: Inventory<ItemType>) => {
    const [items, setItems] = useState(inventory.getItems());

    const addItem = () => {
        inventory.add();
        setItems(inventory.getItems());
    }

    const removeItem = (item: ItemType) => {
        inventory.remove(item);
        setItems(inventory.getItems());
    }
    
    return {
        items,
        addItem,
        removeItem
    }
}