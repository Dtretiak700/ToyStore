import "./instagramBlock.css";
import InstagramPics from "./InstagramPics";

const InstagramBlock = () => {
    return(
        <div className="instagram-main-container">
            <div className="instagram-block">
                <p className="instagram-title">We're on Instagram!</p>
                <InstagramPics />
            </div>
        </div>
    )
}

export default InstagramBlock;