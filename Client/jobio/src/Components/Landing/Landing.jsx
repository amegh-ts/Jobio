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
                            <img src="/Images/Landing/Svg/logo-coinbase.svg" alt="coinbase" />
                            <img src="/Images/Landing/Svg/logo-nasa.svg" alt="nasa" />
                            <img src="/Images/Landing/Svg/logo-netflix.svg" alt="netflix" />
                            <img src="/Images/Landing/Svg/logo-pinterest.svg" alt="pinterest" />
                            <img src="/Images/Landing/Svg/logo-spotify.svg" alt="spotify" />
                            <img src="/Images/Landing/Svg/logo-vodafone.svg" alt="vodafone" />
                        </div>
                    </div>

                    <div className="landing-contents">
                        <div className="header">
                            <h1>Why people choose us?</h1>
                            <p>It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.</p>
                        </div>

                        <div className="img-body">
                            <div className="lcontainer">
                                <div className='lc-img'>
                                    <img src="/Images/Landing/l1.png" alt="" />
                                </div>
                                <div className="lc-content">
                                    <h2>Job Alerts</h2>
                                    <p>It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.</p>
                                    <button>READ MORE</button>
                                </div>
                            </div>

                            <div className="lcontainer">
                                <div className="lc-content">
                                    <h2>Career Advice</h2>
                                    <p>It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.</p>
                                    <button>READ MORE</button>
                                </div>
                                <div className='lc-img'>
                                    <img src="/Images/Landing/l2.png" alt="" />
                                </div>
                            </div>

                            <div className="lcontainer">
                                <div className='lc-img'>
                                    <img src="/Images/Landing/l3.png" alt="" />
                                </div>
                                <div className="lc-content">
                                    <h2>Job Alerts</h2>
                                    <p>It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.</p>
                                    <button>READ MORE</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing