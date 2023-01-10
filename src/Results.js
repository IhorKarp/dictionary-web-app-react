import React from 'react';

export default function Results (props){
    return (
        <div className='Results'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12' align='center'>
                        <h2 className='definition' >{props.data.word}</h2>
                         <span className='phonetic-sound'>
                          <a href={props.data.audio} >Audio</a>
                         </span>
                        <div className='phonetic-transciption'>{props.data.transcription}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h4 className='meanings-type'>{props.data.meaning}</h4>
                    </div>
                    <div className='col-12'>
                        <p className='definition'>{props.data.definition}</p>
                    </div>
                    <div className='col-12'>
                        <em><p className='example'>The innkeeper brought them food and drink.</p></em>
                    </div>
                    <div className='col-12'>
                        <p className='definition'>
                        • A foodstuff
                        </p>
                    </div>
                <div className='synonyms row'>
                    <div className='synonym-word col-12' align='center'>
                    {props.data.synonym1}
                    </div>
                    <div className='synonym-word col-12' align='center'>
                    {props.data.synonym2}
                    </div>
                    <div className='synonym-word col-12' align='center'>
                    {props.data.synonym3}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}