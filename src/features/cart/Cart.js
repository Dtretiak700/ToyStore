import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../app/redux/slices/cartSlice";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <div className="main-cart-container">
                <div className="cart-info-place">
                    <h3 className="title-total-price">TOTAL: ${totalPrice}</h3>
                    {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Cart;