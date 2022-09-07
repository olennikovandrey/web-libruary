import SortItem from "./SortItem";
import SortSelect from "./SortSelect/SortSelect";
import { amountPerPage } from "../FilterField/data/filterFieldData";
import russian from "../../assets/images/sorf-field/russian.svg";
import english from "../../assets/images/sorf-field/english.svg";
import { RU, EN } from "../../store/actions/action-types";
import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

export default function SortField(props) {
  const {
    stateSortChanger, isTitleAToB, isTitleBToA, isYearAToB,
    isYearBToA, isSheetsAToB, isSheetsBToA, isFileSizeAToB,
    isFileSizeBToA, changeAmountPerPage, booksPerPage } = props;

  const dispatch = useDispatch();
  const lang = useSelector(state => state.lang);

  return (
    <div className="sort-field-wrapper">
      <SortItem
        title={ lang === "english" ? "By title:" : "По названию:" }
        stateSortChanger={ stateSortChanger }
        isAToB={ isTitleAToB }
        isBToA={ isTitleBToA }
        stateAToBFnName="setTitleAToB"
        stateBToAFnName="setTitleBToA"
        sortValueAToB="A - Z"
        sortValueBToA="Z - A"
      />
      <SortItem
        title={ lang === "english" ? "Product year:" : "По году выпуска:" }
        stateSortChanger={ stateSortChanger }
        isAToB={ isYearAToB }
        isBToA={ isYearBToA }
        stateAToBFnName="setYearAToB"
        stateBToAFnName="setYearBToA"
        sortValueAToB="&#9650;"
        sortValueBToA="&#9660;"
      />
      <SortItem
        title={ lang === "english" ? "By number of pages:" : "По объему издания:" }
        stateSortChanger={ stateSortChanger }
        isAToB={ isSheetsAToB }
        isBToA={ isSheetsBToA }
        stateAToBFnName="setSheetsAToB"
        stateBToAFnName="setSheetsBToA"
        sortValueAToB="&#9650;"
        sortValueBToA="&#9660;"
      />
      <SortItem
        title={ lang === "english" ? "By file size:" : "По размеру файла:" }
        stateSortChanger={ stateSortChanger }
        isAToB={ isFileSizeAToB }
        isBToA={ isFileSizeBToA }
        stateAToBFnName="setFileSizeAToB"
        stateBToAFnName="setFileSizeBToA"
        sortValueAToB="&#9650;"
        sortValueBToA="&#9660;"
      />
      <SortSelect
        data={ amountPerPage }
        stateFunc={ changeAmountPerPage }
        labelText={ lang === "english" ? "Show books:" : "Отобразить изданий:" }
        booksPerPage={ +booksPerPage }
      />
      <div className="sort-field-wrapper__flag-wrapper">
        <img src={ russian } className="flag" alt="russian" onClick={ () => dispatch({ type: RU }) } />
      </div>
      <div className="sort-field-wrapper__flag-wrapper">
        <img src={ english } className="flag" alt="english" onClick={ () => dispatch({ type: EN }) } />
      </div>
    </div>
  );
}

SortField.propTypes = {
  stateSortChanger: PropTypes.func,
  changeAmountPerPage: PropTypes.func,
  isTitleAToB: PropTypes.bool,
  isTitleBToA: PropTypes.bool,
  isYearAToB: PropTypes.bool,
  isYearBToA: PropTypes.bool,
  isSheetsAToB: PropTypes.bool,
  isSheetsBToA: PropTypes.bool,
  isFileSizeAToB: PropTypes.bool,
  isFileSizeBToA: PropTypes.bool,
  booksPerPage: PropTypes.number
};
