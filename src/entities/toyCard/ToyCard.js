import { useState } from "react";
import ChangeQuantityButtons from "./ChangeQuantityButtons";
import "./toyCard.css";
import { addItemToCart } from "../../app/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ToyCard = ({ toy }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="toy-card-container">
            <img src={`./toyPics/${toy.img}.jpg`} alt="Toy"/>
            <p>{toy.name}</p>
            <div className="toy-price-block">
                <p>$ {toy.price}.00 USD</p>
            </div>
            <ChangeQuantityButtons 
                quantity={quantity}
                setQuantity={setQuantity} 
            />
            <button 
                className="addToCart-btn"
                onClick={() => {dispatch(addItemToCart({toy, quantity}))}}    
            >
                Add to cart
            </button>
        </div>
    )
}

export default ToyCard;