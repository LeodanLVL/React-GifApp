import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [Inputvalue, setvalue] = useState('')
    const handleOnchange = (e)=>{
        // console.log(Inputvalue);
        setvalue(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // setCategories([...categories,Inputvalue]);    para esto hay que enviar otra prop que sea la lista de categorias pero con un call back se puede obtener el valor anterior de las categorias
        if(Inputvalue.trim().length > 2)
        {
          setCategories((cat)=>[Inputvalue,...cat]);
          setvalue('');
        }
        
    };
  return (
    
    <form onSubmit={handleSubmit}>
    <input 
        type="text" 
        value={Inputvalue}
        onChange={handleOnchange}
    />

    </form>
    
  )
}

 AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
 }; 
