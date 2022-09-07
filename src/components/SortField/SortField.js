import SortItem from "./SortItem";
import SortSelect from "./SortSelect/SortSelect";
import { amountPerPage } from "../FilterField/data/filterFieldData";
import React from "react";
import PropTypes from "prop-types";

export default function SortField(props) {
  const {
    stateSortChanger, isTitleAToB, isTitleBToA, isYearAToB,
    isYearBToA, isSheetsAToB, isSheetsBToA, isFileSizeAToB,
    isFileSizeBToA, changeAmountPerPage, booksPerPage } = props;

  return (
    <div className="sort-field-wrapper">
      <SortItem
        title="По названию:"
        stateSortChanger={ stateSortChanger }
        isAToB={ isTitleAToB }
        isBToA={ isTitleBToA }
        stateAToBFnName="setTitleAToB"
        stateBToAFnName="setTitleBToA"
        sortValueAToB="A - Z"
        sortValueBToA="Z - A"
      />
      <SortItem
        title="По году выпуска:"
        stateSortChanger={ stateSortChanger }
        isAToB={ isYearAToB }
        isBToA={ isYearBToA }
        stateAToBFnName="setYearAToB"
        stateBToAFnName="setYearBToA"
        sortValueAToB="&#9650;"
        sortValueBToA="&#9660;"
      />
      <SortItem
        title="По объему издания:"
        stateSortChanger={ stateSortChanger }
        isAToB={ isSheetsAToB }
        isBToA={ isSheetsBToA }
        stateAToBFnName="setSheetsAToB"
        stateBToAFnName="setSheetsBToA"
        sortValueAToB="&#9650;"
        sortValueBToA="&#9660;"
      />
      <SortItem
        title="По размеру файла:"
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
        labelText="Отобразить изданий: "
        booksPerPage={ +booksPerPage }
      />
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
