import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Store/Cart-Context";
import { useContext } from "react";

const HeaderCardButton = (props) =>
{
    const cartCtx = useContext(CartContext);
    
    // const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=> {
    //     return curNumber + item.aamount;
    // }, 0);

    const num = cartCtx.items.length;

    console.log(num);


    return (
    <button className={classes.button} onClick={props.onClickkk}>
        <span className={classes.icon}>
        <CartIcon/>
        </span>
        <span>
        Your Cart
        </span>
        <span className={classes.badge}>{num}</span>
    </button>
    );
};
export default HeaderCardButton;
