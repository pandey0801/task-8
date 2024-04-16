import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../Store/Cart-Context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = props =>
{

    const cartCtx = useContext(CartContext);

    const total = `$${cartCtx.totalAmount.toFixed(2)}`;




    // const cartItem = <ul className={classes['cart-items']}>
    //                    {[{id: 'c1', 
    //                    name:'Sushi',
    //                    amount:2,
    //                    price:12.99}
    //                    ].map((item) => <li>{item.name}</li>)}</ul>;


    const cartItemRemoveHandler = id => {
        console.log(id);
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {};

    const cartItem = (
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>(
            // <li>{item.name}</li>
            <CartItem 
            key = {item.id} 
            name={item.name} 
            amount={item.amount}  
            price={item.price} 
            onRemove={cartItemRemoveHandler}
            onAdd={cartItemAddHandler}
            />
        ))}
        </ul>
    )



    return ( 
        <Modal onClose={props.onCloseCart}>
        <div>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        </div>
        </Modal>
    );
}

export default Cart;