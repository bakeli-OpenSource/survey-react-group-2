
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
 import Home from './Components/Home';
import CreateSondage from './Components/CreateSondage';
import SondageList from './Components/SondageList';
import Dashboard from './Components/Dashboard';
// import Annoncement from './Components/Annoncement';


function App() {
  return (
      
      <BrowserRouter>
      <>
      {/* <Annoncement/> */}
       <Navbar/>
       
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/sondage' element={<CreateSondage/>} />
        <Route path='/sondagelist' element={<SondageList/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      {/* <Footer/>   */}
      </>
</BrowserRouter>
  
    
  );
}

export default App;
