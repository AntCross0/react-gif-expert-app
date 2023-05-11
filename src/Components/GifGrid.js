import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const [gifes, setGif] = useState([]);

    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async () => {
        
        const urlGiphy = 'https://api.giphy.com/v1/gifs/search?q=Game+of+thrones&limit=10&api_key=jbvjfu0Pc6qk7CJ4zZ3KkALus1A6VCra';
        const resp = await fetch(urlGiphy);
        const {data} = await resp.json();


        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                img: img.images.downsized_large.url
            }
            
        });
        
        setGif(gifs);
        //console.log(gifs);
        
    }

    return (
        <div>
            <h3>{ category }</h3>
            <ol>
                <GifGridItem gif={gifes} />
            </ol>
        </div>
    )
}