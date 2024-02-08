import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSondages } from '../redux/actions/sondageAction'; 
import Loading from './Loading';
import Message from './Message';
 function SondageList() {

  const dispatch = useDispatch();
  const sondagesList = useSelector((state) => state.sondagesList?.sondageInfo);
  const sondageToken= useSelector((state) => state?.userLogin?.userInfo?.token);

  const { loading, error, sondageInfo } = sondagesList || {};

  useEffect(() => {
    dispatch(getSondages(sondageToken));
  }, [dispatch]);

  return (
    <>
     <div className=' my-5 py-5 zIndex'>
      <div>
      <h2>Liste des Sondages</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : sondageInfo ? ( 
        <ul>
          {sondageInfo.map((sondage) => (
            <li key={sondage.id}>
              <h3>{sondage.titre}</h3>
              <p>Options:</p>
              <ul>
                {sondageInfo.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <Message variant="info">Aucun sondage trouvé.</Message>
      )}
    </div>
    </div> 
    </>
  );;
}
export default SondageList;


