import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props){
    return(
        <div className="Meaning container">
            <div className="row">
            <div className="col-12">
          <h3 className="meanings-type">{props.meaning.partOfSpeech}</h3>
        </div>
        {props.meaning.definitions.map(function (definition, index) {
          if (index >= 0 && index < 2) {
            return (
              <div className="col-12" key={index}>
                <div className="row">
                  <div className="col-12 margin-definition">
                    <p className="definition"> • {definition.definition}</p>
                  </div>
                  <em className="example"> {definition.example}</em>
                  <Synonyms synonyms={definition.synonyms} />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
            </div>
        </div>
    )
}