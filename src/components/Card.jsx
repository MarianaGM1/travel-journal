import React from "react";

export default function Card(props) {
   return (
      <div className="card">
         <div className="card--img">
            <img src={props.imageUrl} alt="" />
         </div>
         <div className="card--text">
            <div className="card--location">
               <p><img src="/location-pin.svg" className="card--icon"/>{props.location}</p>
               <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p  className="card--description">{props.description}</p>
         </div>
      </div>
   )
}
