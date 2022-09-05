import React from "react";

export default function NoResults() {
  return (
    <div className="no-results">
      <p className="no-results__message">
        По Вашему поисковому запросу результатов нет, попробуйте найти что-то другое
      </p>
      <span className="no-results__image1" />
      <span className="no-results__image2" />
      <span className="no-results__image3" />
      <span className="no-results__image4" />
    </div>
  );
}
