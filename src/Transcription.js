import React from "react";

export default function Transcription(props){
 if(props.phonetic[1]){
    return <div className="Transcription">{props.phonetic[1].text}</div>;
 }else if(props.phonetic[0]){
    return <div className="Transcription">{props.phonetic[0].text}</div>
 }else {
    return null;
 }
}