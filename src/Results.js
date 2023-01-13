import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import Transcription from './Transcription';


export default function Results (props){
    if(props.results){
    return (
        <div className='container Results p-0'>
                <div className='row'>
                    {/* Word  and Phonetics*/}
                    <div className='col-12 mt-4' align='center'>
                        <h2 className='keyword' >{props.results.word}
                         <span >
                          {props.results.phonetics.map((phonetic, index)=> {
                            if( index < 1  && phonetic !== "" ){
                                return (
                                    <span className="phonetic-sound" key={index}>
                                    <Phonetics phonetic={phonetic} />
                                    </span>
                                )
                            }else{
                                return null;
                            }
                          })}
                         </span>
                        </h2>

                        <Transcription phonetic={props.results.phonetics} />
                    </div>
                </div>
                {/* Meaning of the word , with or without synonyms , depends on the info returned by API call */}
                <div className='col-12'>
                    {props.results.meanings.map((meaning , index)=>{
                        return(
                            <div key={index}>
                            <Meaning meaning={meaning}/>
                            </div>)
                        }
                    )}
                 </div>
        </div>

    
    )
    }else{
        return null ;
    }
}