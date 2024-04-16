import classes from './MealItemForm.module.css'
import Input from '../UI/Input';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import CartProvider from '../../Store/CartProvider';
import CartContext from '../../Store/Cart-Context';

const MealItemForm = props =>
{
    // const [amountIsValid, setAmountIsValid] = useState(true);
    // const amountInputRef = useRef();

    // console.log(props)
    
    const { addItem } = useContext(CartContext);

    const submitHandler = event => {
        event.preventDefault();


        // console.log("button working fine ")

        addItem({name:props.name,
                id:props.id,
                price:props.price,
                amount:1
        });

        // console.log(props.name);

        // const enterAmount = amountInputRef.current.value;
        // const enterAmountNumber = +enterAmount;

        // if(enterAmount.trim().length=== 0 || 
        // enterAmountNumber < 1 || 
        // enterAmountNumber >5)
        // {
        //     setAmountIsValid(false);
        //     return;
        // }

        // props.onAddToCart(enterAmountNumber);
        // return;

    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label ="Amount" input={{
            id: 'amount',
            type: 'number',
            min: "1",
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ ADD</button>
        {/* {!amountIsValid && <p>please enter a valid amount (1-5). </p>} */}
    </form>
};

export default MealItemForm