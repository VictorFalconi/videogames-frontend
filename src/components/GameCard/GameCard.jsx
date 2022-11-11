import React from 'react';
import imgdefault from '../../../src/img/imgdefault.jpg'
import './GameCard.css';
import star from '../../img/yellow-star.png';
import grayStar from '../../img/gray-star.png';

export default function GameCard ({ name, image, genres, rating }) {
    
    return (
        <div className='container'>
            <h1 className='title'>{name}</h1>
            <img className='image' src={image? image : imgdefault} alt='game cover'/>
            <h3 className='genre'>{genres.map((genre, id) => <span key={id}> {genre.name} </span>)}</h3>
            <div className='rating'>
                {[0,0,0,0,0].fill(1, 0, Math.ceil(rating) - 1).map((e, i) => <img key={i} src={e ? star : grayStar} height='30px' alt='rating star'/>)}
            </div>
        </div>
    );

};
