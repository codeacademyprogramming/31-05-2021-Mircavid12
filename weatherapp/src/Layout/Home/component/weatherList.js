import React from "react";

export default function WeatherList({city,key}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <ul className="list-group">
              <li className="list-group-item" >{`${city?.name} ${city?.main?.temp}K`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

