import BookItem from "../BookItem/BookItem";
import FilterField from "../FilterField/FilterField";
import { data } from "../../data/data";
import SortField from "../SortField/SortField";
import React, { useState } from "react";

export default function Main() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchYear, setSearchYear] = useState("All");
  const [searchStack, setSearchStack] = useState("All");
  const [isTitleAToB, setTitleAToB] = useState(false);
  const [isTitleBToA, setTitleBToA] = useState(false);
  const [isYearAToB, setYearAToB] = useState(false);
  const [isYearBToA, setYearBToA] = useState(false);
  const [isSheetsAToB, setSheetsAToB] = useState(false);
  const [isSheetsBToA, setSheetsBToA] = useState(false);

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

  const stateSortChanger = (stateFnTitle) => {
    if (stateFnTitle === "setTitleAToB") {
      setTitleAToB(!isTitleAToB);
      setTitleBToA(false);
      setYearAToB(false);
      setYearBToA(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
    } else if (stateFnTitle === "setTitleBToA") {
      setTitleBToA(!isTitleBToA);
      setTitleAToB(false);
      setYearAToB(false);
      setYearBToA(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
    } else if (stateFnTitle === "setYearAToB") {
      setYearAToB(!isYearAToB);
      setYearBToA(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
    } else if (stateFnTitle === "setYearBToA") {
      setYearBToA(!isYearBToA);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
    } else if (stateFnTitle === "setSheetsAToB") {
      setSheetsAToB(!isSheetsAToB);
      setSheetsBToA(false);
      setYearBToA(false);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
    } else if (stateFnTitle === "setSheetsBToA") {
      setSheetsBToA(!isSheetsBToA);
      setSheetsAToB(false);
      setYearBToA(false);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
    }
    return;
  };

  function byFieldAToB(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }

  function byFieldBToA(field) {
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }

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
      <SortField
        stateSortChanger={ stateSortChanger }
        isTitleAToB={ isTitleAToB }
        isTitleBToA={ isTitleBToA }
        isYearAToB={ isYearAToB }
        isYearBToA={ isYearBToA }
        isSheetsAToB={ isSheetsAToB }
        isSheetsBToA={ isSheetsBToA }
      />
      <section className="content">
        {
          filteredData
            .sort(isTitleAToB ? byFieldAToB("title") : undefined)
            .sort(isTitleBToA ? byFieldBToA("title") : undefined)
            .sort(isYearAToB ? byFieldAToB("year") : undefined)
            .sort(isYearBToA ? byFieldBToA("year") : undefined)
            .sort(isSheetsAToB ? byFieldAToB("sheets") : undefined)
            .sort(isSheetsBToA ? byFieldBToA("sheets") : undefined)
            .map(item =>
              <BookItem
                key={ item.title + item.author}
                data={ item }
                setStackFilter={ setStackFilter }
              />
            )
        }
      </section>
    </div>
  );
}
