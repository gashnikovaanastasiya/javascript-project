import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Card() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='img/aqualung.png'
                            text='Who keeps a figure on a pulse'
                            path='/services'
                        />
                        <CardItem
                            src='img/nature.png'
                            text='How to be a part of the universe?'
                            path='/services'
                        />
                        <CardItem
                            src='img/graduated.png'
                            text='Best lections about space from all over the world'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
