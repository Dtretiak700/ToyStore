import stuffedToys from "../../shared/data/stuffedToys";
// import woodenToys from "../../shared/data/woodenToys";

const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const toys = stuffedToys.find(item => item.id === cartItem.toyId);
    // const toysTwo = woodenToys.find(item => item.id === cartItem.toyId);
    return(
        <div>
            <p>{toys.name}</p>
            <p>{cartItem.quantity} item(s)</p>
        </div>
    )
}

export default CartItem;