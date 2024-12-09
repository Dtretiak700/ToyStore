import { instagramPictures } from "../../shared/data/instagramPictures";
import "./instagramBlock.css";

const InstagramBlock = () => {
    return(
        <div className="instagram-main-container">
            <div className="instagram-block">
                <p className="instagram-title">We're on Instagram!</p>
                <div className="pictures-block">
                    {instagramPictures.map((picture) => {
                        const {id, pic} = picture;
                        return(
                            <div key={id}>
                                <img src={pic} alt="Inst Pictures"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default InstagramBlock;