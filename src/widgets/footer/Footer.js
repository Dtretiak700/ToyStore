import "./footer.css";
import twitterIcon from "../../shared/assets/images/twitter.svg";
import facebookIcon from "../../shared/assets/images/facebook.svg";
import instagramIcon from "../../shared/assets/images/instagram.svg";
import pinterestIcon from "../../shared/assets/images/pinterest.svg";
import youtubeIcon from "../../shared/assets/images/youtube.svg";

const Footer = () => {
    return(
        <div className="footer-main-container">
            <div className="footer-info-block">

                <div className="title-footer-block">
                    <p className="footer-title">WonderToys</p>
                    <div className="menu-footer-block">
                        <p className="footer-text">Home</p>
                        <p className="footer-text">Catalog</p>
                        <p className="footer-text">Delivery</p>
                        <p className="footer-text">About</p>
                        <p className="footer-text">Contacts</p>
                    </div>
                    <div className="footer-sm-icons">
                        <img src={twitterIcon} alt="Social Media Icon"/>
                        <img src={facebookIcon} alt="Social Media Icon"/>
                        <img src={instagramIcon} alt="Social Media Icon"/>
                        <img src={pinterestIcon} alt="Social Media Icon"/>
                        <img src={youtubeIcon} alt="Social Media Icon"/>
                    </div>
                </div>

                <hr className="footer-line" />
                <div className="bottom-info">
                    <p className="extra-text-footer">© 2024 All information and images on this website are used for educational purposes</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;