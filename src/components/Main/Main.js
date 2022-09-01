import BookItem from "../BookItem/BookItem";
import FilterField from "../FilterField/FilterField";
import { data } from "../../data/data";
import React, { useState } from "react";

export default function Main() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchYear, setSearchYear] = useState("All");
  const [searchStack, setSearchStack] = useState("All");

  const filteredData = data.filter(item =>
    item.stack.includes(searchStack) &&
    item.year.includes(searchYear) &&
    item.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    item.author.toLowerCase().includes(searchAuthor.toLowerCase()));

  const setTitleFilter = (title) => {
    setSearchTitle(title);
  };

  const setAuthorFilter = (author) => {
    setSearchAuthor(author);
  };

  const setYearFilter = (year) => {
    setSearchYear(year);
  };

  const setStackFilter = (stack) => {
    setSearchStack(stack);
  };

  return (
    <div className="main">
      <FilterField
        setTitleFilter={ setTitleFilter }
        setAuthorFilter={ setAuthorFilter }
        setYearFilter={ setYearFilter }
        setStackFilter={ setStackFilter }
        searchTitle={ searchTitle }
        searchAuthor={ searchAuthor }
        searchYear={ searchYear }
        searchStack={ searchStack }
        result={ filteredData.length }
      />
      {
        filteredData.map(item =>
          <BookItem
            key={ item.title + item.author}
            data={ item }
            setStackFilter={ setStackFilter }
          />
        )
      }
    </div>
  );
}
