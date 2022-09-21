import "./SearchBar.css";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="boxContainer">
      <table className="elementsContainer">
        <tbody>
          <tr>
            <td>
              <input type="text" className="searchBarInput" />
            </td>
            <td>
              <a href="/" className="searchButton">
                <BiSearch></BiSearch>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
