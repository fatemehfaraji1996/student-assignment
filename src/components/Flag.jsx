/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";

export default function Mycomponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const handleSelect = (event) => {
    setSelectedRegion(event.target.value);
  };
  // dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {/* navbar */}
      <div className="navbar">
        <p className="p-navbar">where in the world? </p>
        {/* <button className="button">Dark mode</button>
         */} <button className="button" onClick={toggleDarkMode}>
         Dark Mode
      </button>
      </div>
      {/* hamburger menu and search box */}
      <div>
        {/* search box */}
        <div></div>
        {/* hamburger meno*/}
        <div className="dropdown">
          <label htmlFor="region-select">Filter by Region:</label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={handleSelect}
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      {/* cards */}
      <div className="allCard">
        {data.map((item, index) => (
          <div className="card" key={index} style={{ position: "relative" }}>
            <img
              src={item.flags.png}
              alt={item.name.common}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name.common}</h5>
              <p className="card-text">Population: {item.population}</p>
              <p className="card-text">Region: {item.region}</p>
              <p className="card-text">Capital: {item.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
