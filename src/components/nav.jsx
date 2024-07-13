import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/reducers";
export default function Nav() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.countryReducer.darkMode);

  return (
    <>
      <div className={darkMode ? "navbar-dark" : "navbar"}>
        <span className={darkMode ? "p-navbarr-dark" : "p-navbarr"}>
          where in the world?
        </span>
        <button
          className={darkMode ? "button-dark" : "button"}
          onClick={() => dispatch(toggleTheme())}
        >
          Dark Mode
        </button>
      </div>
    </>
  );
}
