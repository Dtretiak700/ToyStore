import { Element } from "react-scroll";
import ToyCard from "../../entities/toyCard/ToyCard";
// import stuffedToys from "../../shared/data/stuffedToys";
// import woodenToys from "../../shared/data/woodenToys";
import "./toyCategories.css";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, selectStuffedToys, selectWoodenToys } from "../../app/redux/slices/toysSlice";
import { useEffect } from "react";
import toysData from "../../shared/data/toysData";

const ToyCategories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterCategory(toysData))
    }, [dispatch])
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