import React from 'react';
import '../index.css';

export const GifGridItem = ( { gif }) => {

    return <div className='cards-grid'>
        {
            gif.map( g => {
                return (
                        <div className='card animate__animated animate__fadeInDown' key={ g.id}>
                            <img src={ g.img } alt={ g.title } />
                            <p>{ g.title }</p>
                        </div>
                )
            })
        }

    </div>
}