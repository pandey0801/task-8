import classes from './MealItem.module.css'
import MealItemForm from '../../Layout/MealItemForm';
import Input from '../../UI/Input';
import { useContext } from 'react';

import CartContext from '../../../Store/Cart-Context';


const MealItem = props =>
{
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    // const addToCartHandler = amount =>{
    //     cartCtx.addItem({
    //         id:props.id,
    //         name:props.name,
    //         amount:amount,
    //         price: props.price
    //     });

    // }

    return (
    <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealItemForm 
        // onAddToCart={addToCartHandler} 
        id={props.id} 
        name={props.name} 
        amount={1} 
        price={props.price} 
        />
        </div>
    </li>
    );
}
export default MealItem;