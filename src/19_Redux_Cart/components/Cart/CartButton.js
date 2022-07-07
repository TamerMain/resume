import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions }  from "../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const badgeQuantity = useSelector(state => state.cartSlice.totalQuantity)
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeQuantity}</span>
    </button>
  );
};

export default CartButton;
