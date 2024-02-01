import './style.sass';

function PageBanner({ imgPath, line }) {
    return (
        <div className="page-banner">
            <img src={imgPath ? imgPath : '/images/banner.jpg'} alt="landscape" />
            { line ? <h1>{line}</h1> : null }
        </div>
    )
}

export default PageBanner;