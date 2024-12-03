import Input from "../../features/input/Input";
import "./subscribe.css";
import subscribeIcon from "../../shared/assets/images/subscribe.svg";

const Subscribe = () => {
    return(
        <div className="subscribe-main-container">
            <div className="subscribe-input-container">
                <div className="text-subscribe-block">
                    <div className="green-subscribe-square">
                        <img src={subscribeIcon} alt="Subscribe Icon"/>
                    </div>
                    <p className="text-subscribe">Subscribe to our newsletter 
                        <br />& get <span>10% discount!</span>
                    </p>
                </div>
                <Input />
            </div>
        </div>
    )
}

export default Subscribe;