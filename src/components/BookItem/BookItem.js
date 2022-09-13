import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function BookItem({ data, setStackFilter }) {
  const [showInfo, setShowInfo] = useState(false);
  const lang = useSelector(state => state.lang);

  return (
    <>
      <div key={ data.title } className="book-item" style={ { borderLeftColor: data.borderColor } }>
        <img src={ data.stackIcon } className="book-item__stack-icon" alt="icon" name={ data.clickFilterValue } onClick={ (event) => setStackFilter(event.target.name) }/>
        { data.stackIcon2 && <img src={ data.stackIcon2 } className="book-item__stack-icon-second" alt="icon2" name={ data.clickFilterValue2 } onClick={ (event) => setStackFilter(event.target.name) }/> }
        { data.stackIcon3 && <img src={ data.stackIcon3 } className="book-item__stack-icon-third" alt="icon3" name={ data.clickFilterValue3 } onClick={ (event) => setStackFilter(event.target.name) }/> }
        { data.stackIcon4 && <img src={ data.stackIcon4 } className="book-item__stack-icon-fourth" alt="icon4" name={ data.clickFilterValue4 } onClick={ (event) => setStackFilter(event.target.name) }/> }
        <span className="book-item__title" >{ data.title }</span>
        <div className="book-item__description">
          <div className="book-item__image-wrapper">
            <img src={ data.img } className="image" alt="cover" height="auto" width="200"/>
            <span className="format-name">{ data.fileFormat }</span>
            <span className="file-size">
              { data.fileSize } { lang === "english" ? "Mb" : "Мб" }
            </span>
          </div>
          <div className="description">
            <span className="description__author">
              { lang === "english" ? "Author:" : "Автор:" } { data.author }
            </span>
            <span className="description__year">
              { lang === "english" ? "Product year:" : "Год издания:" } { data.year[0] }
            </span>
            <span className="description__sheets">
              { lang === "english" ? "Number of pages:" : "Количество страниц:" } { data.sheets }
            </span>
            <div className="description__show-info-btn" onClick={ () => setShowInfo(!showInfo) }>
              { showInfo ? ( lang === "english" ? "Hide description" : "Скрыть описание" ) :
                ( lang === "english" ? "Show description" : "Показать описание" )
              }
            </div>
            {
              showInfo &&
              <div className="description__info">
                { data.description }
              </div>
            }
            <a href={ data.link } className="description__link" target="blank">
              { lang === "english" ? "Download" : "Скачать" }
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

BookItem.propTypes = {
  data: PropTypes.object,
  setStackFilter: PropTypes.func
};
