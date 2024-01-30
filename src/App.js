
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
//  import Home from './Components/Home';
import CreateSondage from './Components/CreateSondage';


function App() {
  return (
      
      <BrowserRouter>
      <>
       <Navbar/>
      {/* <Home/>  */}
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/sondage' element={<CreateSondage/>} />
      </Routes>
      <Footer/>  
      </>
</BrowserRouter>
  
    
  );
}

export default App;
