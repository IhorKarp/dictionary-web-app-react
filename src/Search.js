import React from 'react';

export default function Search (){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                   <input type='search' className="search-input" />
                </div>
                <div className='col-3'>
                   <input type='submit' className="button-input" />
                </div>
            </div>
        </div>
    )

    
}