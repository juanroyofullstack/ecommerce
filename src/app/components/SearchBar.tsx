"use client";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

import { setQuery } from "../lib/features/searchSlice";
import { useUrlSync } from "../hooks";
import type { RootState } from "../store";
import "./SearchBar.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useUrlSync();

  const currentQuery = useSelector((state: RootState) => state.search.query);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query =
      inputRef.current?.value ??
      ((event.target as HTMLFormElement).search.value || "");

    if(query === currentQuery) return;

    dispatch(setQuery(query));
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    if (inputRef.current && currentQuery !== inputRef.current.value) {
      inputRef.current.value = currentQuery;
    }
  }, [currentQuery]);

  return (
    <form className="SearchBar flex items-center bg-white shadow-md rounded-full relative"
      onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        name="search" type="text"
        placeholder="Search..."
        className="SearchBar__input text-black rounded-full"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
          }
        }}/>
      <button
        type="submit"
        className="MagnifingGlassSearch
          absolute
          right-3
          cursor-pointer"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
