import React , { useState } from 'react';
import Results from './Results';
import "./SearchEngine.css";
import axios from 'axios';

export default function SearchEngine (props) {
  const [loaded , setLoaded] = useState(false);
  const [keyword , setKeyword] =  useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  
  function handleResponse (response){
   console.log(response.data[0]);
   setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateWord(event) {
    setKeyword(event.target.value);
  }

  function search (){
    
    // documentation https://dictionaryapi.dev/
    
    const urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    
    // axios call to the dictionary API 
    
    axios.get(urlApi).then(handleResponse);
  }

  function load (){
    setLoaded(true);
    search();
  }

if(loaded){
    return (
        <div className='SearchEngine'>
        <div className="container border border-light">
      <div className='row'>
        <div className='col-6 text-center'>
          <h2>Search Words</h2>
            <form className='row' onSubmit={handleSubmit}>
                <div className='col-9'>
                   <input type='text' placeholder='food' className="search-input" autoFocus={true} onChange={updateWord} />
                </div>
                <div className='col-3'>
                   <button  className="button-input rounded ">Search</button>
                </div>
        </form>
        </div>
        <div className='col-6'>
          <Results results={results} />
        </div>
      </div>
     </div>
     </div>
    )
}else{
load();
  return <h2 className='text-white'>Loading ...</h2>
}
}