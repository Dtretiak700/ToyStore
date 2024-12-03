import { Element } from "react-scroll";
import ToyCard from "../../features/toyCard/ToyCard";
import stuffedToys from "../../shared/data/stuffedToys";
import woodenToys from "../../shared/data/woodenToys";
import "./toyCategories.css";

const ToyCategories = () => {
    return(
        <Element name="categories" className="toy-main-container">
            <div className="toy-cat-container">
                <h4>Stuffed Animals</h4>
                <div className="toys-row">
                    {stuffedToys.map(toy => <ToyCard toy = {toy}/>
                    )}
                </div>
                <h4>Wooden Toys</h4>
                <div className="toys-row">
                    {woodenToys.map(toy => <ToyCard toy = {toy}/>
                )}
                </div>
            </div>
        </Element>
    )
}

export default ToyCategories;