import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <li>
            {item.name} - ${item.price}
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default CartItem;
