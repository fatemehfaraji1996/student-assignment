import "./pagetwoo.css";
import { useEffect } from "react";

import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { clearCount } from '../redux/reducers';

export default function PageTwo() {
  
  // const [data, setData] = useState(null);
  const cm = useSelector((state) => state.countryReducer.Selection);
  const data = cm[0]
console.log(data);
  useEffect(() => {

  }, []);
  const dispatch = useDispatch();
  const handelClickc=()=>{
    dispatch(clearCount());
  }

  return (
    <>
    <Link to={"../"}
    onClick={handelClickc}
     >back</Link>
      <div className="cantanerPage2">
        <img
          className="selectedCountrye"
          src={data.flags.svg}
          alt=""
        />
        <div className="cantanerLeft">
          <h2 className="h2Style">{data.name.common}</h2>
          <div className="cantanerPLeftRight">
            <div className="cantanerP">
              <p>Native Name: {data.name.nativeName?.fas?.official}</p>
              <p>Population:{data.population.toLocaleString()} </p>
              <p>Region:{data.region}</p>
              <p>Sub Region:{data.subregion}</p>
              <p>Capital:{data.capital.join(", ")}</p>
            </div>
            <div className="cantanereftp">
              <p>Top Level Domain:{data.tld.join(", ")}</p>
              <p>Currencies:{Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", ")} </p>
              <p>Languaes: {Object.values(data.languages).join(", ")}</p>
              {/* <h2> Border Countries:</h2>
        <ul>
           {data.borders.map((border) => (
            <li key={border}>{border}</li>
          ))} 
        </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
