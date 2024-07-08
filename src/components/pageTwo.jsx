import "./pagetwoo.css";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
export default function PageTwo() {
  const location = useLocation();
  useEffect(() => {
    const { item } = location.state || {};
    console.log(item);
  }, []);
  return (
    <>
    <Link to={"../"}>back</Link>
      <div className="cantanerPage2">
        <img
          className="selectedCountrye"
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          alt=""
        />
        <div className="cantanerLeft">
          <h2 className="h2Style">iran</h2>
          <div className="cantanerPLeftRight">
            <div className="cantanerP">
              <p>Native Name:{}</p>
              <p>Population:{} </p>
              <p>Region:{}</p>
              <p>Sub Region:{}</p>
              <p>Capital:{}</p>
            </div>
            <div className="cantanereftp">
              <p>Top Level Domain:{}</p>
              <p>Currencies:{} </p>
              <p>Languaes:{}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/**  <div className="container">
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
      // </ul> }
      // </div>   
      // */
