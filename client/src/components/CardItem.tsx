import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Collab" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                </div>
                <iframe title='Collab' src={props.playlist}  height="480" frameBorder="0" allowTransparency allow="encrypted-media"></iframe>
            </Link>
        </li>
    </>
  )
}

export default CardItem