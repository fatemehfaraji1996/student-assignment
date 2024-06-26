/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";

export default function Mycomponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [selectedRegion, setSelectedRegion] = useState("All");

  // const handleSelect = (event) => {
  //   setSelectedRegion(event.target.value);
  // };
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
     <div className={darkMode?"darkmode-body":"body"}> {/* navbar */}
      <div className="navbar">
        <p className={darkMode?"p-navbar-dark":"p-navbar"}>where in the world? </p>
        <button className={darkMode?"button-dark":"button"} onClick={toggleDarkMode}>
          Dark Mode
        </button>
      </div>
      {/* hamburger menu and search box */}
      <div>
        {/* search box */}
        <div></div>
        {/* hamburger meno*/}
        {/* <div className="dropdown">
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
        </div> */}
      </div>
      {/* cards */}
      <div className="allCard">
        {data.map((item, index) => (
          <div className={darkMode?"darkmode_card":"card"} key={index} style={{ position: "relative" }}>
            <img
              src={item.flags.png}
              alt={item.name.common}
              className="cardimgtop"
            />
            <div className={darkMode?"cardbodyDark":"cardbody"}>
              <h5 className={darkMode?"cardtitleDark":"cardtitle"}>{item.name.common}</h5>
              <p className={darkMode?"cardtextDark":"cardtext"}>Population: {item.population}</p>
              <p className={darkMode?"cardtextDark":"cardtext"}>Region: {item.region}</p>
              <p className={darkMode?"cardtextDark":"cardtext"}>Capital: {item.capital}</p>
            </div>
          </div>
        ))}
      </div></div>
    </>
  );
}
