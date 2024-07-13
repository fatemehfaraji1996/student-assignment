/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// ༼ つ ◕_◕ ༽つ
import { addCount } from "../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
export default function Mycomponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  // ༼ つ ◕_◕ ༽つ
  const dispatch = useDispatch();
  const handelClick = (item) => {
    dispatch(addCount(item));
  };
  // ༼ つ ◕_◕ ༽つ

  const handleSelect = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);

    const filteredData = data.filter((item) => {
      if (region === "All") {
        return true;
      } else {
        return item.region === region;
      }
    });

    setFilteredData(filteredData);
  };

  const darkMode = useSelector((state) => state.countryReducer.darkMode);
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
  const filteredCountries = data.filter((item) =>
    item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayedCountries =
    selectedRegion === "All" ? filteredCountries : filteredData;

  return (
    <>
      <div className={darkMode ? "darkmode-body" : "body"}>
        <div className="seahum">
          {/* search box */}
          <div>
            <input
              placeholder="search for a country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* dropdown*/}
          <div className="dropdown">
            <select
              id="region-select"
              value={selectedRegion}
              onChange={handleSelect}
            >
              <option value="All">Filter by Region</option>
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
          {displayedCountries.map((item, index) => (
            <Link
              to={"/country"}
              state={item}
              className={darkMode ? "darkmode_card" : "card"}
              key={index}
              style={{ position: "relative" }}
              onClick={() => handelClick(item)}
            >
              <img
                src={item.flags.png}
                alt={item.name.common}
                className="cardimgtop"
              />
              <div className={darkMode ? "cardbodyDark" : "cardbody"}>
                <h5 className={darkMode ? "cardtitleDark" : "cardtitle"}>
                  {item.name.common}
                </h5>
                <p className={darkMode ? "cardtextDark" : "cardtext"}>
                  Population: {item.population}
                </p>
                <p className={darkMode ? "cardtextDark" : "cardtext"}>
                  Region: {item.region}
                </p>
                <p className={darkMode ? "cardtextDark" : "cardtext"}>
                  Capital: {item.capital}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
