import { instagramPictures } from "../../shared/data/instagramPictures";
import "./instagramBlock.css";

const InstagramPics = () => {
    return(
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
    )
}

export default InstagramPics;