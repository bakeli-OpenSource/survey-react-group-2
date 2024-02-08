import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSondages } from '../redux/actions/sondageAction'; 
// import Loading from './Loading';
// import Message from './Message';
 function SondageList() {
const sondageList = useSelector((state) => state.sondagelist)
const sondageToken= useSelector((state) => state?.userLogin?.userInfo?.token);

console.log({sondageList});

const { sondageInfo } = sondageList || {} ;
const [sondages, setSondages] = useState([]); 
console.log("sondageInfo", sondageInfo);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSondages(sondageToken));
    console.log(sondageInfo);
  }, [dispatch]);


  const CardItem = ({item}) => {

  return (
    
    //  <div className=' my-5 py-5 zIndex'>
      
      
      
            <ul>
                
                    <li >
                        <h3>{item.titre}</h3>
                        <p>Questions :</p>
                        <ul>
                            {JSON.parse(item.option).map((question, indexQuestion) => (
                                <li key={indexQuestion}>
                                    <p>{question.question}</p>
                                    <ul>
                                        {question.options.map((option, indexOption) => (
                                            <li key={indexOption}>{option}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
               
            </ul>
        
        //  </div>
      
     );
   }

   return (
     <div>
       <div className=' my-4 py-4 zIndex'>
       {/* <div className='container py-5 m-5'>
         <div className='row'> */}
           <div className=' text-center'>
             <h1>Liste de mes Sondages</h1>
             <hr />
           </div>
            </div>
         {/* </div>
       </div> */}
       <div className='container'>
         
           {sondageInfo.map((sondage) => {
            return <CardItem key={sondage.id} item={sondage} />
           })}
         
       </div>
    //  </div>
   
   )
 }
   
     
   
export default SondageList;


