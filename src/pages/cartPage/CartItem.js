import deleteIcon from "../../shared/assets/images/trash.svg";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import toysData from "../../shared/data/toysData";

const CartItem = ({cartItem}) => {
    const toys = toysData.find(item => item.id === cartItem.toyId);
    const dispatch = useDispatch();
    return(
        <div>
            <p className="price-text-name">"{toys.name}"</p>
            <div className="info-price">
                <p className="price-text">{cartItem.quantity} item(s)</p>
                <p className="price-text">${toys.price * cartItem.quantity}</p>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <img className="delete-icon" src={deleteIcon} alt="Delete Icon"/>
                </span>
            </div>
        </div>
    )
}

export default CartItem;