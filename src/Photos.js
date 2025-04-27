import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  {/* This is the proper way to add comments in JSX */}
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    // Use a more descriptive alt text using data from the photo object
                    alt={photo.alt || `Search result ${index + 1}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
