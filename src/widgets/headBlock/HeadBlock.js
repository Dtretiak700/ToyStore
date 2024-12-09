import { Link } from "react-scroll";
import "./headBlock.css";

const HeadBlock = () => {
    return(
        <div className="head-container">
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
        </div>
    )
}

export default HeadBlock;