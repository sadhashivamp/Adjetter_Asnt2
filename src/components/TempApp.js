import React, { useState, useEffect } from "react";
import "./style.css";
import { HiLocationMarker } from "react-icons/hi";

const TempApp = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=69b534c9fe63fa59a18e526cd1386c49`;
      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="box">
      <h1 className="header">Weather App</h1>
      <div className="inputData">
        <input
          type="search"
          value={search}
          className="inputField"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button>Search</button>
      </div>

      {!city ? (
        <p className="errorMsg"> No Data Found </p>
      ) : (
        <div>
          <div className="info">
            <h1 className="temp">{city.temp}°C</h1>
            <h2 className="location">
              <HiLocationMarker />
              {search}
            </h2>
            <div className="tempminmax_clouds">
              <h3 className="tempmin_max">
                {city.temp_min}°C/{city.temp_max}°C
              </h3>
              <h4>Clouds</h4>
            </div>
          </div>

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
      )}
    </div>
  );
};

export default TempApp;
