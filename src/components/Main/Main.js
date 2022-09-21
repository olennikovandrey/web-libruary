import BookItem from "../BookItem/BookItem";
import FilterField from "../FilterField/FilterField";
import { data } from "../../data/data";
import SortField from "../SortField/SortField";
import NoResults from "../NoResults/NoResults";
import Pagination from "../Pagination/Pagination";
import React, { useState } from "react";

export default function Main() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchYear, setSearchYear] = useState("Все");
  const [searchStack, setSearchStack] = useState("Все");
  const [searchFileFormat, setSearchFileFormat] = useState("");
  const [isTitleAToB, setTitleAToB] = useState(false);
  const [isTitleBToA, setTitleBToA] = useState(false);
  const [isYearAToB, setYearAToB] = useState(false);
  const [isYearBToA, setYearBToA] = useState(false);
  const [isSheetsAToB, setSheetsAToB] = useState(false);
  const [isSheetsBToA, setSheetsBToA] = useState(false);
  const [isFileSizeAToB, setFileSizeAToB] = useState(false);
  const [isFileSizeBToA, setFileSizeBToA] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);

  const filteredData = data.filter(item =>
    item.stack.includes(searchStack) &&
    item.year.includes(searchYear) &&
    item.title.toLowerCase().trim().includes(searchTitle.toLowerCase().trim()) &&
    item.author.toLowerCase().trim().includes(searchAuthor.toLowerCase().trim()) &&
    item.fileFormat.includes(searchFileFormat)
  );

  const stateChangerFn = (stateFn, value) => {
    setCurrentPage(1);
    stateFn(value);
    window.scrollBy(0, -document.body.scrollHeight);
  };

  const stateSortChanger = stateFnTitle => {
    if (stateFnTitle === "setTitleAToB") {
      setTitleAToB(!isTitleAToB);
      setTitleBToA(false);
      setYearAToB(false);
      setYearBToA(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
      setFileSizeAToB(false);
      setFileSizeBToA(false);
    } else if (stateFnTitle === "setTitleBToA") {
      setTitleBToA(!isTitleBToA);
      setTitleAToB(false);
      setYearAToB(false);
      setYearBToA(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
      setFileSizeAToB(false);
      setFileSizeBToA(false);
    } else if (stateFnTitle === "setYearAToB") {
      setYearAToB(!isYearAToB);
      setYearBToA(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
      setFileSizeAToB(false);
      setFileSizeBToA(false);
    } else if (stateFnTitle === "setYearBToA") {
      setYearBToA(!isYearBToA);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setSheetsAToB(false);
      setSheetsBToA(false);
      setFileSizeAToB(false);
      setFileSizeBToA(false);
    } else if (stateFnTitle === "setSheetsAToB") {
      setSheetsAToB(!isSheetsAToB);
      setSheetsBToA(false);
      setYearBToA(false);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setFileSizeAToB(false);
      setFileSizeBToA(false);
    } else if (stateFnTitle === "setSheetsBToA") {
      setSheetsBToA(!isSheetsBToA);
      setSheetsAToB(false);
      setYearBToA(false);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setFileSizeAToB(false);
      setFileSizeBToA(false);
    } else if (stateFnTitle === "setFileSizeAToB") {
      setFileSizeAToB(!isFileSizeAToB);
      setSheetsAToB(false);
      setSheetsBToA(false);
      setYearBToA(false);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setFileSizeBToA(false);
    } else if (stateFnTitle === "setFileSizeBToA") {
      setFileSizeBToA(!isFileSizeBToA);
      setSheetsBToA(false);
      setSheetsAToB(false);
      setYearBToA(false);
      setYearAToB(false);
      setTitleBToA(false);
      setTitleAToB(false);
      setFileSizeAToB(false);
    }
    return;
  };

  function byFieldAToB(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }

  function byFieldBToA(field) {
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentPageBooks = filteredData.slice(firstBookIndex, lastBookIndex);
  const isPaginationShow = (filteredData.length / booksPerPage) > 1;

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -document.body.scrollHeight);
    }
  };

  return (
    <div className="main">
      <FilterField
        setSearchTitle={ setSearchTitle }
        setSearchAuthor={ setSearchAuthor }
        setSearchYear={ setSearchYear }
        setSearchStack={ setSearchStack }
        setSearchFileFormat={ setSearchFileFormat }
        setCurrentPage={ setCurrentPage }
        stateChangerFn={ stateChangerFn }
        searchTitle={ searchTitle }
        searchAuthor={ searchAuthor }
        searchYear={ searchYear }
        searchStack={ searchStack }
        searchFileFormat={ searchFileFormat }
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
        isFileSizeAToB={ isFileSizeAToB }
        isFileSizeBToA={ isFileSizeBToA }
        changeAmountPerPage={ setBooksPerPage }
        booksPerPage={ +booksPerPage }
      />
      <section>
        <div  className="content">
          {
            filteredData.length !== 0 ? currentPageBooks
              .sort(isTitleAToB ? byFieldAToB("title") : undefined)
              .sort(isTitleBToA ? byFieldBToA("title") : undefined)
              .sort(isYearAToB ? byFieldAToB("year") : undefined)
              .sort(isYearBToA ? byFieldBToA("year") : undefined)
              .sort(isSheetsAToB ? byFieldAToB("sheets") : undefined)
              .sort(isSheetsBToA ? byFieldBToA("sheets") : undefined)
              .sort(isFileSizeAToB ? byFieldAToB("fileSize") : undefined)
              .sort(isFileSizeBToA ? byFieldBToA("fileSize") : undefined)
              .map(item =>
                <BookItem
                  key={ item.title + item.author}
                  data={ item }
                  setStackFilter={ setSearchStack }
                />
              ) :
              <NoResults />
          }
        </div>
        { isPaginationShow &&
          <Pagination
            booksPerPage={ +booksPerPage }
            totalBooks={ filteredData.length }
            paginate={ paginate }
            currentPage={ currentPage }
          />
        }
      </section>
    </div>
  );
}
