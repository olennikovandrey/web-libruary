import SortItem from "./SortItem";
import React from "react";
import PropTypes from "prop-types";

export default function SortField(props) {
  const { stateSortChanger, isTitleAToB, isTitleBToA, isYearAToB, isYearBToA, isSheetsAToB, isSheetsBToA } = props;

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
        sortValueAToB="1 - 10"
        sortValueBToA="10 - 1"
      />
      <SortItem
        title="По объему:"
        stateSortChanger={ stateSortChanger }
        isAToB={ isSheetsAToB }
        isBToA={ isSheetsBToA }
        stateAToBFnName="setSheetsAToB"
        stateBToAFnName="setSheetsBToA"
        sortValueAToB="1 - 10"
        sortValueBToA="10 - 1"
      />
    </div>
  );
}

SortField.propTypes = {
  stateSortChanger: PropTypes.func,
  isTitleAToB: PropTypes.bool,
  isTitleBToA: PropTypes.bool,
  isYearAToB: PropTypes.bool,
  isYearBToA: PropTypes.bool,
  isSheetsAToB: PropTypes.bool,
  isSheetsBToA: PropTypes.bool
};



//.sort(isTitleAToB ? byFieldAToB("title") : null)
//.sort(isTitleBToA ? byFieldBToA("title") : null)
//.sort(isYearAToB ? byFieldAToB("year") : null)
//.sort(isYearBToA ? byFieldBToA("year") : null)
