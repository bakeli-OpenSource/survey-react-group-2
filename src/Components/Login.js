/* eslint-disable no-unused-vars */
// import axios from 'axios';
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


  const handleLogin = async(event) => {
    event.preventDefault();
    console.log(email,password);
    await dispatch(login(email, password));
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
			<h1>Login</h1>
			<div class="social-container">
				<a href="/" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="/" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="/" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} 
               placeholder="Email"/> 
			<input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********" />
			<br/>
			<button type='submit'>Login</button>
			<p>Vous n'avez pas de compte ? ?</p>
			<NavLink to="/register">register</NavLink>	
		</form>
		
            
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Entrez vos données personnelles et commencez votre sondage avec nous</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </div>
    
    </>
  )
}
export default Login;
