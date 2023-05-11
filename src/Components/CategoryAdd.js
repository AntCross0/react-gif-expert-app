import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue( e.target.value );
        
    }   

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue != '' ) {
            
            setCategories((cats) => {
             return [ inputValue, ...cats];
            });
            setInputValue('');
        }
        else {
            throw 'Debe tener algo para agregar';
        }



        
    }


    return <form onSubmit={ handleSubmit }>
        <input 
            type='Text'
            onChange={ handleInputChange }
                value={ inputValue } 
                />
    </form>
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired,
}


export default CategoryAdd