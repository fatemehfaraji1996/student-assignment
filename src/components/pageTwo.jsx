import { useState, useEffect } from "react";
import "./ai.css";
const CountryPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/iran")
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div> ...</div>;
  }

  return (
    <div className="container">
      <div className="helf">
        <img src={data.flags.svg} alt="" />
      </div>
      <div className="half">
        <p>Native Name : {data.name.nativeName?.fas?.official}</p>
        <p>Population: {data.population.toLocaleString()}</p>
        <p>Region: {data.region}</p>
        <p> Sub Region: {data.subregion}</p>
        <p>tip level domain : {data.tld.join(", ")}</p>
        <p>
          currency:
          {data.currencies?.IRR?.name}
        </p>
        <p>languages: {Object.values(data.languages).join(", ")}</p>
        <p>Capital: {data.capital.join(", ")}</p>
      </div>
      {/* <h2> Border Countries:</h2>
      <ul>
        {data.borders.map((border) => (
          <li key={border}>{border}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default CountryPage;
