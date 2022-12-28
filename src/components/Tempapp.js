import React, { useEffect, useState } from "react";
import "./css/main.css";

const Tempapp = () => {
  const [city, setCity] = useState();

  const [search, setSearch] = useState("lucknow");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a8f286b9ace2b6587e908f057d265883`;
      const response = await fetch(url);

      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">no data found</p>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view"></i>
              {search}
            </h2>
            <h1 className="temp">{city.temp}'Cel</h1>
            <h3 className="tempmin_max">
              MIN : {city.temp_min}'Cel | MAX : {city.temp_max}'Cel
            </h3>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
        x
      </div>
    </>
  );
};

export default Tempapp;
