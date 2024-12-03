import "./about.css";
import videoAbout from "../../shared/assets/toys-video.mp4";
import play from "../../shared/assets/images/play-btn.svg";
import { useRef, useState } from "react";
import pause from "../../shared/assets/images/pause.png";

const AboutTheShop = () => {
    const [videoPlay, setVideoPlay] = useState(true);
    const refVideo = useRef();

    const handlePlay = () => {
        setVideoPlay(!videoPlay);
        videoPlay ? refVideo.current.play() : refVideo.current.pause();
    }

    return(
        <div className="video-block">
            <video 
                src={videoAbout}
                loop
                muted
                ref={refVideo}
            >
            </video>
            <div className="text-btn-container">
                <p className="about-title">Watch Our Story</p>
                <p className="about-text">There is no magic formula for creating the perfect toy store experience. It depends on many factors, including the selection of toys, store layout, customer service, and even the child’s sense of wonder.</p>
                <button 
                className="play-btn"
                onClick={handlePlay}>
                    <img 
                    src={videoPlay ? play : pause} 
                    alt="Button"/>
                </button>
            </div>
        </div>
    )
}

export default AboutTheShop;