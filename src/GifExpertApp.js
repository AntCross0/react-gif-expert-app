import React, { useState } from 'react';
import CategoryAdd from './Components/CategoryAdd';
import { GifGrid } from './Components/GifGrid';


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Game of Thrones']);

    // const handleAdd = ( ) => {
        
    //     setCategories( cats => { 
    //         cats.push('House of the dragons');
    //         return [...cats];
    //     });
    // }
    


    return (
    <>
        <h2> GifExpert App</h2>
        <CategoryAdd setCategories={setCategories} />

        <hr />
        <ol>
            {
               categories.map( category => {
                return <GifGrid category={ category } key={category}    />

               })
            }
        </ol>
    </>
    );
}

export default GifExpertApp;