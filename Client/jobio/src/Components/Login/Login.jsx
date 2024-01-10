import './Login.scss'
const Login = () => {
  return (
    <div>
        <div className="Login">
            <div className="login-container">
                <div className="container-left"></div>
                    <div className="image">
                        <img src="/Images/login.png" alt="" />
                    </div>
                <div className="container-right">
                    <h3>Member Login</h3>
                    <input type="text" />
                    <input type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login