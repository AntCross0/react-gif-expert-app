import React from 'react';

export const GifGridItem = ( { gif }) => {

   console.log(gif);
    return <div>
        {
            gif.map( g => {
                return (
                    <li>
                        <img src={ g.img } alt={ g.title } />
                        <p>{ g.title }</p>
                    </li>
                )
            })
        }

    </div>
}