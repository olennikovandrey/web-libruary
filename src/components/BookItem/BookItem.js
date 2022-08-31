import { data } from "../../data/data";
import React from "react";

export default function BookItem() {
  return (
    <>
      {
        data.map(item =>
          <div key={ item.title } className="book-item" style={ { borderLeftColor: item.borderColor } }>
            <img src={ item.img } className="book-item__image" alt="cover" height="auto" width="300"/>
            <img src={ item.stackIcon } className="book-item__stack-icon" alt="icon"/>
            { item.stackIcon2 && <img src={ item.stackIcon2 } className="book-item__stack-icon-second" alt="icon2"/> }
            { item.stackIcon3 && <img src={ item.stackIcon3 } className="book-item__stack-icon-third" alt="icon2"/> }
            <div className="description">
              <span className="description__title" >{ item.title }</span>
              <span className="description__author">Автор: { item.author }</span>
              <span className="description__year">Год издания: { item.year }</span>
              <span className="description__sheets">Количество страниц: { item.sheets }</span>
              <span className="description__info">{ item.description }</span>
              <a href={ item.link } className="description__link" target="blank">Скачать</a>
            </div>
          </div>
        )
      }
    </>
  );
}
