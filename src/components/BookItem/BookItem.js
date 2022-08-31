import React from "react";
import PropTypes from "prop-types";

export default function BookItem({ data }) {
  return (
    <>
      <div key={ data.title } className="book-item" style={ { borderLeftColor: data.borderColor } }>
        <img src={ data.img } className="book-item__image" alt="cover" height="auto" width="300"/>
        <img src={ data.stackIcon } className="book-item__stack-icon" alt="icon"/>
        { data.stackIcon2 && <img src={ data.stackIcon2 } className="book-item__stack-icon-second" alt="icon2"/> }
        { data.stackIcon3 && <img src={ data.stackIcon3 } className="book-item__stack-icon-third" alt="icon3"/> }
        { data.stackIcon4 && <img src={ data.stackIcon4 } className="book-item__stack-icon-fourth" alt="icon4"/> }
        <div className="description">
          <span className="description__title" >{ data.title }</span>
          <span className="description__author">Автор: { data.author }</span>
          <span className="description__year">Год издания: { data.year[0] }</span>
          <span className="description__sheets">Количество страниц: { data.sheets }</span>
          <span className="description__info">{ data.description }</span>
          <a href={ data.link } className="description__link" target="blank">Скачать</a>
        </div>
      </div>

    </>
  );
}

BookItem.propTypes = {
  data: PropTypes.object
};
