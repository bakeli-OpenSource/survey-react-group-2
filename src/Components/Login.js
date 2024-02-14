
import React,{ useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/actions/userAction';
import Loading from './Loading';
import Message from './Message';
// import axios from "../api/axios";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const userLogin =  useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;


  const handleLogin = async (event) => {
    event.preventDefault();
    await dispatch(login(email, password));
    // console.log(userLogin.userInfo);
    navigate("/sondage");
   
   

    // try {
    //   await axios.post('http://localhost:8000/api/users/login',{email,password})
    //   setEmail("");
    //   setPassword("")
    //   navigate("/")
    // } catch (e) {
    //   console.log(e);
    // }
  }
  return (
    <>
    <div className="body">
    <h2>Page de Connexion</h2>
<div class="container" id="container">
	<div class="form-container sign-in-container">
  {error && <Message variant="danger">{error}</Message>}
     {loading && <Loading />}
       {Loading}
    <form onSubmit={handleLogin}>
			<h1 className="text-danger mt-3">Login</h1>
			{/* <div class="social-container">
				<a href="/" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="/" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="/" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span> */}
			<input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} 
               placeholder="Email"/> 
			<input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********" />
			<br/>
			<button type='submit'className="btn btn-danger ">Login</button>
			<p>Vous n'avez pas de compte ? ?</p>
			<NavLink to="/register" className="btn btn-danger ">register</NavLink>	
		</form>
		
            
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn" className="btn btn-danger">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Bienvenue</h1>
				<p> veillez vous connecter pour commencer le Sondage</p>
				{/* <button class="ghost" id="signUp"className="btn btn-danger ">Sign Up</button> */}
			</div>
		</div>
	</div>
</div>
    </div>
    
    </>
  )
}
export default Login;
