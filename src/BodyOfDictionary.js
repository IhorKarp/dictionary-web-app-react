import React , { useState } from 'react';
import Results from './Results';
import "./BodyOfDictionary.css";
import axios from 'axios';

export default function BodyOfDictionary (props) {
  const [wordData , setWordData] = useState({ready:false});
  const [word , setWord] =  useState(props.defaultWord);
  function handleResponse (response){
   console.log(response);
   setWordData({
    ready:true, 
    word: response.data[0].word,
    audio: response.data[0].phonetics[2].audio,
    transciption: response.data[0].phonetics[1].text,
    meaning: response.data[0].meanings[0].partOfSpeech,
    definition: response.data[0].meanings[0].definitions[0].definition,
    synonym1: response.data[0].meanings[0].synonyms[0],
    synonym2: response.data[0].meanings[0].synonyms[1],
    synonym3: response.data[0].meanings[0].synonyms[2],

     })
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateWord(event) {
    setWord(event.target.value);
  }

  function search (){
    const urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  axios.get(urlApi).then(handleResponse);
  }
if(wordData.ready){
    return (
        <div className='BodyOfDictionary'>
        <div className="container border border-dark">
      <div className='row'>
        <div className='col-6 text-center'>
          <h2>Search Words</h2>
            <form className='row' onSubmit={handleSubmit}>
                <div className='col-9'>
                   <input type='text' placeholder='food' className="search-input" autoFocus={true} onChange={updateWord} />
                </div>
                <div className='col-3'>
                   <input type='submit' className="button-input" />
                </div>
        </form>
        </div>
        <div className='col-6'>
          <Results data={wordData} />
        </div>
      </div>
     </div>
     </div>
    )
}else{
  search();
  console.log(wordData);
  return 'Loading ...'
}
}