import { useSelector } from "react-redux";
import Footer from "../../widgets/footer/Footer";
import "./cart.css";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

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
            <Footer />
        </div>
    )
}

export default Cart;