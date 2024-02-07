import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { sondageAdd } from '../redux/actions/sondageAction';
import Loading from './Loading';
import Message from './Message';
import './style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateSondage = () => {
    const [titre, setSurveyTitle] = useState('');
    const [option, setQuestions] = useState([{ options: [''] }]);

    // const handleQuestionTextChange = (index, value) => {
    //     const newQuestions = [...option];
    //     newQuestions[index].question = value;
    //     setQuestions(newQuestions);
    // };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const newQuestions = [...option];
        newQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(newQuestions);
    };

    // const addQuestion = () => {
    //     setQuestions([...option, { question: '', options: [''] }]);
    // };

    const addOption = (questionIndex) => {
        const newQuestions = [...option];
        newQuestions[questionIndex].options = [...newQuestions[questionIndex].options, ''];
        setQuestions(newQuestions);
    };
    // eslint-disable-next-line no-unused-vars
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const sondageadd = useSelector((state) => state.sondageadd);
    // eslint-disable-next-line no-unused-vars
    const {error, loading,sondageInfo} = sondageadd;
  
    const addSondage = (e) => {
      e.preventDefault();
     
      
      dispatch(sondageAdd(titre,option));
    //   navigate("/sondagelist");
        
    };
    const removeQuestion = (index) => {
        const newQuestions = [...option];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const removeOption = (questionIndex, optionIndex) => {
        const newQuestions = [...option];
        newQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(newQuestions);
    };

    // let token = sessionStorage.getItem('token');
    // const addSondage = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post('http://localhost:8000/api/sondage/create', {
    //             titre: titre,
    //             option: option,             
    //         },
    //         {
    //             headers: {
    //                 "Authorization" : `Bearer ${token}`
    //             },
    //         }
    //         );
    //         console.log('Sondage créé avec succès:', response.data);
    //     } catch (error) {
    //         console.error('Erreur lors de la création du sondage:', error.response);
    //     }
    // };

    return (
      <div className=' my-5 py-5 zIndex '>
    <div className="d-flex align-items-center mx-auto my-4 col-lg-7 col-md-10 col-sm-10 " id="content">
    {error && <Message variant="danger">{error}</Message>}
              {loading && <Loading />}
              {message && <Message variant="danger">{message}</Message>}
        <form onSubmit={addSondage} className="form-control my-4" id="survey" autoComplete="off">
            <h2 className="mt-0 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Créez Un Sondage
            </h2>

            <label className="font-semibold text-base text-black text-left" htmlFor="surveyTitleField">
                Titre du sondage:
            </label>
            <div className="d-flex justify-content-between align-items-center flex-wrap" id="header">
            <input
               className="my-4 mx-4" type="text" name="titre_sondage" placeholder="Titre"
                value={titre}
                onChange={(e) => setSurveyTitle(e.target.value)}
            />
            </div>
            <div className="form-field">
            {option.map((question, questionIndex) => (
                <div key={questionIndex}>

                    {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center mt-2">
                            <div class="form-check d-flex align-items-center justify-content">
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                                className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 text-black text-sm border border-blue-300"
                                placeholder={`option ${optionIndex }`}
                            />
                            </div>
                            {question.options.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeOption(questionIndex, optionIndex)}
                                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Supprimer
                                </button>    
                            )}
                        </div>
                    ))}
                      <br/>
                    <button
                        type="button"
                        onClick={() => addOption(questionIndex)}
                        className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
                    >
                        Ajouter une option
                    </button>
                    <br/>
                    {option.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeQuestion(questionIndex)}
                            className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Supprimer la Question
                        </button>
                    )}
                </div>  
            ))}
         </div>
         <br/>
            <button
                type="submit"
                className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 mb-0 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700 w-full"
            >
                Créer le sondage
            </button>
        </form>
        </div>
         </div>
      
    );
};

export default CreateSondage;






// import {useState} from 'react'

// import './style.css'

// function CreateSondage() {
//   const [sondageList, setSondageList] = useState([{ sondage: "", question:"", reponse:"" }]);

//   const handleSondageChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...sondageList];
//     list[index][name] = value;
//     setSondageList(list);
//   };

//   const handleSondageRemove = (index) => {
//     const list = [...sondageList];
//     list.splice(index, 1);
//     setSondageList(list);
//   };
  

//   const handleSondageAdd = () => {
//     setSondageList([...sondageList, { sondage: "", question:"", reponse:"" }]);
//   };
//   return (
//     <div className=' my-5 py-5 zIndex'>
//     <div className="d-flex">
//         <div className="d-flex mx-auto my-4 col-lg-7 col-md-10 col-sm-10 flex-wrap" id="content">

//           <h1>Créer un Sondage</h1>

//           <form className="form-control my-4" id="survey" autoComplete="off">
//             <div className="d-flex justify-content-between align-items-center flex-wrap" id="header">
//               <input className="my-4 mx-4" type="text" name="titre_sondage" placeholder="Titre"/>
           
//             </div>


         
//             <div className="form-field">
//               <label htmlFor="question">Question</label>
             
              
//               <div className="">
//                 {sondageList.map((singleSondage, index) => (
//                   <div key={index} className="sondages">
//                     <div className="first-division">
                    

//                       <div class="form-check d-flex align-items-center justify-content">
                        
//                         <input
//                           type="text"
//                           id="reponse_texte"
//                           name="reponse_texte"
//                           value={singleSondage.sondage}
//                           placeholder="Votre réponse..."
//                           onChange={(e) => handleSondageChange(e, index)}
//                           required
//                           className="my-2"for="reponse"/>
//                       </div>
//                       <div class="form-check d-flex align-items-center justify-content-around">
                     
//                         <input type="text"
//                           id="reponse_texte"
//                           name="reponse_texte"
//                           value={singleSondage.sondage}
//                           placeholder="Votre réponse..."
//                           onChange={(e) => handleSondageChange(e, index)}
//                           required
//                           className="my-2"for="reponse"/>
//                       </div>
//                       <div class="form-check d-flex align-items-center justify-content-around">
//                         <input type="text"
//                           id="reponse_texte"
//                           name="reponse_texte"
//                           value={singleSondage.sondage}
//                           placeholder="Votre réponse..."
//                           onChange={(e) => handleSondageChange(e, index)}
//                           required
//                           className="my-"for="reponse"/>
//                       </div>

//                     </div>
//                     {sondageList.length - 1 === index && sondageList.length < 4 && (
//                         <button
//                           type="button"
//                           onClick={handleSondageAdd}
//                           className="add-btn"
//                         >
//                           <span>Ajouter une question</span>
//                         </button>
//                       )}
//                     <div className="second-division">
//                       {sondageList.length !== 1 && (
//                         <button
//                           type="button"
//                           onClick={() => handleSondageRemove(index)}
//                           className="remove-btn"
//                         >
//                           <span>Supprimer</span>
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button
//             type="submit"
//             className="submit-btn"
//             >
//               <span>Envoyerr</span>
//             </button>
//           </form>
//         </div>
//       </div>
//      </div>
//   );
// }

// export default CreateSondage