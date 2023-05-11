import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import '../index.css';
import { getGifs } from '../Helpers/getGifs';


export const GifGrid = ({ category }) => {

    const [gifes, setGif] = useState([]);

    useEffect( () => {
     getGifs( category ).then(
        gifs => {
            setGif(gifs);
        }
     )

    }, [ category ]);

  

    return (
        <>
            <h3>{ category }</h3>
            <div className='cards-grid'>
                    <GifGridItem gif={ gifes } />
            </div>
            <div className='divider'></div>
        </>
    )
}