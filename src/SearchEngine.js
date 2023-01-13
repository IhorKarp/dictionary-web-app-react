import React , { useState } from 'react';
import Results from './Results';
import "./SearchEngine.css";
import axios from 'axios';
import Photos from "./Photos";

export default function SearchEngine (props) {
  const [loaded , setLoaded] = useState(false);
  const [keyword , setKeyword] =  useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  
  function handleResponse (response){
   console.log(response.data[0]);
   setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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

    // Pexels Url + Call

    let pexelsApiKey =
      "563492ad6f917000010000017139843c0ff54232a308ef55d1da89ba";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    // axios call to the Pexels photos API
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);

  }

  function load (){
    setLoaded(true);
    search();
  }

if(loaded){
    return (
        <div className='SearchEngine'>
        <div className="container border border-light border-3 rounded-4">
      <div className='row'>
        <div className='col-6 text-center'>
          <h1>Search Words</h1>
            <form className='row mt-3' onSubmit={handleSubmit}>
                <div className='col-8'>
                   <input type='text' placeholder='  Type here...' className="search-input border border-light rounded-4" autoFocus={true} onChange={updateWord} />
                </div>
                <div className='col-4'>
                   <button  className="search-button border border-light border-3 rounded-4 ">Search</button>
                </div>
        </form>
        </div>
        {/* Results component*/}
        <div className='col-6'>
          <Results results={results} />
        </div>
        {/* Photos component*/}
        <div className="col-12 ">
                    <Photos photos={photos} />
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