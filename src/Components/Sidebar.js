import { Link } from 'react-router-dom';
import './dashboard.css';
import BsListCheck from '@meronex/icons/bs/BsListCheck';
import IosCreate from '@meronex/icons/ios/IosCreate';
import FdResults from '@meronex/icons/fd/FdResults';

function Sidebar() {

  return (
   <div className='side'>
    <div className=' text-color-black top-fixed'>
<div className='sidebar d-flex justify-content-between flex-column  text-dark py-3 ps-3 pe-5' style={{height:'auto'}}>
        <div>
          
            <ul className="nav nav-pill flex-column">
               
                <li className= "active nav-item p-3 nav-item p-3"
                  >
                    <Link to="/sondage" className='p-3  text-decoration-none'>
                    <IosCreate className='me-3 fs-2'/>
                        <span className='fs-4'><strong>Creer Sondage</strong></span>
                    </Link>
                </li>
                <li className=" nav-item p-3 nav-item p-3">
                    <Link to="/sondagelist" className='p-3 text-decoration-none'> 
                        <BsListCheck className='me-3 fs-2'/>
                        <span className='fs-4'><strong>SondageList</strong></span>
                    </Link>
                </li>
                <li className= " nav-item p-3 nav-item p-3"
                >
                    <Link to="/dashboard" className='p-3  text-decoration-none navLink'>
                        <FdResults className='me-3 fs-2'/>
                        <span className='fs-4'><strong>Resultats Sondages</strong></span>
                    </Link>
                </li>
            </ul>
        </div>
        <div>
        
        </div>
    </div>

    </div>
    </div>
  )
}
export default Sidebar;
