import "./subscribe.css";
import subscribeIcon from "../../shared/assets/images/subscribe.svg";
import SignIn from "../../features/signIn/SignIn";

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
                <SignIn />
            </div>
        </div>
    )
}

export default Subscribe;