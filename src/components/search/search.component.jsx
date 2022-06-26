import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./search.styles.css";

const Search = ({ setSearchedName, searchedRepos, addRepo }) => {
  //for debounce function
  let inDebounce;

  const debounce = (arg, func, delay) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(arg), delay);
  };

  const handleOnSearch = (string, results) => {
    // Update search string to get the suggestions
    debounce(string, setSearchedName, 200);
  };

  const formatResult = ({name}) => {
    return <span className="suggest">{name}</span>;
  };

  return (
    <div className="search-input">
      <ReactSearchAutocomplete
        placeholder="Search for a repository"
        items={searchedRepos}
        onSearch={handleOnSearch}
        formatResult={formatResult}
        onSelect={addRepo}
      />
    </div>
  );
};

export default Search;
