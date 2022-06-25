import "./search.styles.css";

const Search = ({ setSearchedName }) => {

  //for debounce function
  let inDebounce;

  const debounce = (arg, func, delay) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(arg), delay);
  };

  return (
    <div>
      <input
        type={"search"}
        placeholder="search"
        name="search"
        onChange={(e) => {
          debounce(e.target.value, setSearchedName, 2000);
        }}
      />
    </div>
  );
};

export default Search;
