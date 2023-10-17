import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue] = useState ('Naruto');

    const onInputChance = ({target}) => {
        setInputValue(target.value);
    }

    const onsubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1)return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim());
        
    }

  return (
    <form onSubmit={ onsubmit}>
    <input
    type= "text"
    placeholder="Buscar gifs"
    value={ inputValue }
    onChange= {onInputChance}
    />
    </form>
  )
}
