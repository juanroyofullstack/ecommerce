"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { setQuery } from "../lib/features/searchSlice";
import type { RootState } from "../store";
import "./SearchBar.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const query = useSelector((state: RootState) => state.search.query);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    dispatch(setQuery(query));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form className="SearchBar flex items-center bg-white shadow-md rounded-full"
      onSubmit={handleSubmit}>
      <input name="search" type="text" placeholder="Search..." className="SearchBar__input
        text-black rounded-full" value={query} onChange={handleSearch} />
    </form>
  );
};

export default SearchBar;
