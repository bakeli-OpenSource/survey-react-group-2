import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

function Home() {
  return (
    <div className='my-5 py-5'>
      
        <div className="row">
          {/* Images à droite */}
           {/* Texte à gauche */}
          <div className="col-md-6 pt-5 text-center">
            <div  className='pt-5'>
              <h2 className=" text-danger" >SONDAGE RXDFORM</h2>
              <h3 >le meilleur site pour creer votre propre Sondage...</h3>
           
              <Link to="/register" className="btn btn-danger mt-5">Commencer</Link>
            </div>
          </div>

          <div className="col-md-6">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              <div className="carousel-inner " >
                <div className="carousel-item active">
                  <img src="assets/sond1.png" className="d-block w-100" alt="ABAYA" height="500px" />
                </div>
                <div className="carousel-item">
                  <img src="assets/sond2.png" className="d-block w-100" alt="ABAYA" height="500px" />
                </div>
                <div className="carousel-item">
                  <img src="assets/sond1.png" className="d-block w-100" alt="ABAYA" height="500px" />
                </div>
                <div className="carousel-item">
                  <img src="assets/sond2.png" className="d-block w-100" alt="ABAYA" height="500px" />
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>



          
         
        </div>
      
    </div>
  );
}

export default Home;