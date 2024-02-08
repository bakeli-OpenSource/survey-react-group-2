import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSondages } from '../redux/actions/sondageAction'; 
import './sondage.css';
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
    <div className='sondage'>
    <div id="quiz-container" className='sondage1'>
                        <h3 id="question">{item.titre}</h3>
                        {/* <p>Questions :</p> */}
                        <ul id="options">
                        <li >
                            {JSON.parse(item.option).map((question, indexQuestion) => (
                                <li key={indexQuestion}>
                                    <p>{question.question}</p>
                                        {question.options.map((option, indexOption) => (
                                            <li key={indexOption}>{option}</li>
                                        ))}
                                </li>
                            ))} 
                  </li>
            </ul>
        </div>
        </div>
     );
   }

   return (
     <div>
       <div className=' my-5 py-5 zIndex'>
           <div className=' text-center'>
             <h1>Liste de mes Sondages</h1>
             <hr />
            </div>
           {sondageInfo.map((sondage) => {
            return <CardItem key={sondage.id} item={sondage} />
           })}
         </div>
     </div>
   
   )
 }
   
     
   
export default SondageList;


