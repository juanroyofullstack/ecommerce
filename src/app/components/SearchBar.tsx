"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { setQuery } from "../lib/features/searchSlice";
import "./SearchBar.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("search") as string;

    dispatch(setQuery(query));

    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <form className="SearchBar flex items-center bg-white shadow-md rounded-full"
      onSubmit={handleSearch}>
      <input name="search" type="text" placeholder="Search..." className="SearchBar__input
        text-black rounded-full" />
    </form>
  );
};

export default SearchBar;
