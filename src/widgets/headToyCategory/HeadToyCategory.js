import "./headToyCategory.css";
import stuffToy from "../../shared/assets/images/bear.png";
import woodenToy from "../../shared/assets/images/flower.png";

const HeadToyCategory = () => {
    return(
        <div className="head-toy-container">
            <div className="inner-head-toy">
                <div className="yellow-toy-block toy-block">
                    <img src={stuffToy} alt="Bear"/>
                    <p>Stuffed Animals</p>
                </div>
                <div className="red-toy-block toy-block">
                    <p>Wooden Toys</p>
                    <img src={woodenToy} alt="Flower"/>
                </div>
            </div>
        </div>
    )
}

export default HeadToyCategory;