import { Link } from "react-scroll";
import "./headBlockCard.css";

const HeadBlockCard = () => {
    return(
        <div className="card-container">
            <p className="green-text">Say Hello to WonderToys!</p>
            <p className="big-text">Play, Explore, Imagine!</p>
            <button className="scroll-link">
                <Link  
                to="categories"  
                smooth={true} 
                duration={700} 
                >
                    Open Catalog
                </Link>
            </button>
        </div>
    )
}

export default HeadBlockCard;