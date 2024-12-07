import "./navbar.css";
import cartIcon from "../../shared/assets/images/Mask.svg";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../redux/cartSlice";

const Navbar = () => {
    const totalQuantity = useSelector(getTotalQuantity);

    return(
            <nav className="container">
                <div className="green-container"></div>
                <div className="white-container">
                    <div className="inner-container">
                        <p className="title">WonderToys</p>
                        <div className="cart-container">
                            <Link to="/" className="text">Home</Link>
                            <Link to="/cart" className="text">Cart</Link>
                            <img src={cartIcon} alt="Cart Icon"/>
                            <div className="cart-amount">{totalQuantity}</div>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;