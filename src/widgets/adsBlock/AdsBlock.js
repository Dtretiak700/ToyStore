import "./adsBlock.css";

const AdsBlock = () => {
    return(
        <div className="ads-main-container">
            <h4 className="ads-title">WonderToys: Spark Joy & Imagination!</h4>
            <div className="description-main-container">
                <div className="description-container">
                    <p className="description-title">Buy NOW!</p>
                    <div className="green-line"></div>
                    <p className="ads-description">Discover a world of fun and imagination at WonderToys! From educational games to cuddly plush, our toys inspire creativity and bring endless smiles to kids of all ages.</p>
                </div>
                <div className="description-img-container"></div>
            </div>
        </div>
    )
}

export default AdsBlock;