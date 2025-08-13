import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="SearchBar flex items-center bg-white shadow-md rounded-md">
      <input type="text" placeholder="Search..." className="SearchBar__input text-black"/>
    </div>
  );
};

export default SearchBar;
