import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
 import { useSelector,useDispatch  } from 'react-redux';
 import { logout } from '../redux/actions/userAction';

import './nav.css'

function Navbar() {
     const userLogin = useSelector((state) => state?.userLogin);
     const {userInfo} = userLogin;
     console.log(userLogin);
     const dispatch = useDispatch();
  
     const logoutHandler = () => {
       dispatch(logout());
     };


  const [isNavbarActive, setNavbarActive] = useState(false);

  const handleToggleClick = () => {
    setNavbarActive(!isNavbarActive);
  };
  return (
    <>
  <nav className="navbar">
      <div className="brand-title">RXDFORM</div>
      <a href="/" className="toggle-button" onClick={handleToggleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`navbar-links ${isNavbarActive ? 'active' : ''}`}>
        <ul>
          {/* <li><NavLink to="/register">SignIn</NavLink></li> */}
          <li><NavLink to="/sondage">Sondage</NavLink></li>
          
          <div className='logbnt'>
        {userInfo && userInfo  ?(
        <li><NavDropdown title={userInfo.user.name} className='dropdown'>  
        <NavLink className="nav-link" to="/profil">
          <NavDropdown.Item href="/profil" className='bg-white'>profil</NavDropdown.Item>
        </NavLink>
        <NavDropdown.Item onClick={logoutHandler}>
          Deconnection
        </NavDropdown.Item>
      </NavDropdown></li>
        ):(
           <li><NavLink to="/register">S'inscrire</NavLink></li>                    
)}
</div>
        </ul>
      </div>
    </nav>


    </>
  )
}
export default Navbar;






// import React, { useState } from 'react';
// import { NavDropdown } from 'react-bootstrap';
// import { useSelector,useDispatch  } from 'react-redux';
// import { NavLink} from 'react-router-dom';
// import { logout } from '../redux/actions/userAction';

//  const Navbar = () => {
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   const dispatch = useDispatch();

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

  

//     const [menuHeight, setMenuHeight] = useState(0);
//     const toggleMenu = () => {
//       setMenuHeight(menuHeight === 0 ? 300 : 0);
//     };
//   return (
// <>
// <nav>
//         <div class="logo">
//             <h2>RXDform</h2>
//         </div>
//         <ul id="menuList">
//             <li><a href="/">Home</a></li>
//             <li><a href="/">À PROPOS</a></li>
//             <li><a href="/sondage">Sondage</a></li>
//         </ul>
//         <div  className='logbnt' style={{color: 'white'}}>
//         {userInfo && userInfo ?(
//         <NavDropdown title={userInfo.name} className='' style={{ color: 'white'}}>  
//         <NavLink className="nav-link" to="/profil">
//           <NavDropdown.Item href="/profil">profil</NavDropdown.Item>
//         </NavLink>
//         <NavDropdown.Item onClick={logoutHandler}>
//           Deconnection
//         </NavDropdown.Item>
//       </NavDropdown>
//         ):(
//             <NavLink to="/register">S'inscrire</NavLink>                     
// )}
// </div>


//         <div id="menuList" style={{ maxHeight: `${menuHeight}px`, overflow: 'hidden' }}>
//         </div>
//         <div class="menu-icon">
//             <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
//         </div>
//     </nav>

//        </>
    
//   )
// }

// export default Navbar;