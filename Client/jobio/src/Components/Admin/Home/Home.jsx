import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <div className="home-main">
        <div className='left'>
          <div className='header'>
            <img src="/Images/bg.png" alt="" />
          </div>
          <div className='photo'></div>
          <div className='footer'>
            <h2>Name</h2>
            <h3>Highlights</h3>
            <h5>kozhikode, kerala, India <span>Contact info</span></h5>
          </div>
        </div>

        <div className='middle'></div>

        <div className='right'>
          <h1>ads</h1>
        </div>
      </div>
    </div>
  )
}

export default Home