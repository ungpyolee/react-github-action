import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearCart } from './cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleAddItem = () => {
        if (productName && productPrice) {
            dispatch(
                addItem({
                    id: new Date().toISOString(),
                    name: productName,
                    price: parseFloat(productPrice),
                })
            );
            setProductName('');
            setProductPrice('');
        }
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <ul>
                {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Cart;
