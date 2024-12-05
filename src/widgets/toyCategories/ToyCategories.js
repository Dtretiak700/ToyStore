import { Element } from "react-scroll";
import ToyCard from "../../features/toyCard/ToyCard";
// import stuffedToys from "../../shared/data/stuffedToys";
// import woodenToys from "../../shared/data/woodenToys";
import "./toyCategories.css";
import { useSelector } from "react-redux";
import { selectStuffedToys, selectWoodenToys } from "../../redux/toysSlice";

const ToyCategories = () => {
    const stuffedToys = useSelector(selectStuffedToys);
    const woodenToys = useSelector(selectWoodenToys);
    
    return(
        <Element name="categories" className="toy-main-container">
            <div className="toy-cat-container">
                <h4>Stuffed Animals</h4>
                <div className="toys-row">
                    {stuffedToys.map(toy => <ToyCard toy = {toy} key={toy.id}/>
                    )}
                </div>
                <h4>Wooden Toys</h4>
                <div className="toys-row">
                    {woodenToys.map(toy => <ToyCard toy = {toy} key={toy.id}/>
                )}
                </div>
            </div>
        </Element>
    )
}

export default ToyCategories;