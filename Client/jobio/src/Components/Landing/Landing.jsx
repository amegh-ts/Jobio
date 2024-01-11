import './Landing.scss'

const Landing = () => {
    return (
        <div className="Landing">
            <header className="landing-header">
                <div className="title">
                    <h2>Jobio</h2>
                </div>
                <div className="header-links">
                    <a href='/login'>Login</a>
                    <a href='/signup'>Register</a>
                </div>
            </header>
            <section className="image-body">
                <div className="overlay">
                    <h5>It's simple and smart</h5>
                    <h1>Search, Find & Apply</h1>
                    <p>Browse from more than 15,000,000 adverts while new ones come on daily bassis</p>
                    <div className="overlay-button">
                        <span>Register now</span>
                        <button>Register</button>
                    </div>
                </div>
            </section>

            <section className='landing-body'>
                <div className="main-body">
                    <div className="featured">
                        <p>Featured recruiters and employers</p>
                        <div className="featured-images">
                            <img src="/Images/Svg/logo-coinbase.svg" alt="coinbase" />
                            <img src="/Images/Svg/logo-nasa.svg" alt="nasa" />
                            <img src="/Images/Svg/logo-netflix.svg" alt="netflix" />
                            <img src="/Images/Svg/logo-pinterest.svg" alt="pinterest" />
                            <img src="/Images/Svg/logo-spotify.svg" alt="spotify" />
                            <img src="/Images/Svg/logo-vodafone.svg" alt="vodafone" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing