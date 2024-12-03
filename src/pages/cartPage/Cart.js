import { useSelector } from "react-redux";
import Footer from "../../widgets/footer/Footer";
import "./cart.css";
import CartItem from "./CartItem";
import { getCartItems } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);

    return (
        <div>
            <div className="main-cart-container">
                <div className="cart-info-place">
                    {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;