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
        </div>
    )
}

export default Landing