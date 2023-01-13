import React from "react";
import "./Photos.css"

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row mt-3">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm-4 col-12 image-space mb-3 " key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid border border-dark rounded-4 hvr-grow‍‍‍"
                    rel="noreferrer"
                    alt="Word searched"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}