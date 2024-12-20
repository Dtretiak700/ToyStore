import "./toyCard.css";

const ChangeQuantityButtons = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div className="count-container">
            <button onClick={addQuantity}>+</button>
            <p>{quantity}</p>
            <button onClick={removeQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantityButtons;