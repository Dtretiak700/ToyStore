import { useDispatch } from "react-redux";
import AboutTheShop from "../../widgets/about/AboutTheShop";
import AdsBlock from "../../widgets/adsBlock/AdsBlock";
import Footer from "../../widgets/footer/Footer";
import HeadBlock from "../../widgets/headBlock/HeadBlock";
import HeadToyCategory from "../../widgets/headToyCategory/HeadToyCategory";
import InstagramBlock from "../../widgets/instagramBlock/InstagramBlock";
import Subscribe from "../../widgets/subscribe/Subscribe";
import ToyCategories from "../../widgets/toyCategories/ToyCategories";
import "./mainPage.css";
import { useEffect } from "react";
import { filterCategory } from "../../redux/toysSlice";
import toysData from "../../shared/data/toysData";

const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterCategory(toysData))
    }, [dispatch])
    
    return(
        <div className="main-container">
            <HeadBlock />
            <HeadToyCategory />
            <ToyCategories />
            <AboutTheShop />
            <AdsBlock />
            <Subscribe />
            <InstagramBlock />
            <Footer />
        </div>
    )
}

export default MainPage;