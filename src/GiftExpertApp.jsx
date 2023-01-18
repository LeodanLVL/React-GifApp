import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GiftGrid } from './Components/GiftGrid';


const GiftExpertApp = () => {
    // const categories = ['One punch','Samurai X','Dragon Ball'];
    const [categories, setcategories] = useState(['One punch']);
    // const handleAdd = ()=>{
    //     setcategories([...categories,'SAO']);
    // };
  return (
    <>
    <h2>GiftExpertApp</h2>
    <AddCategory setCategories = {setcategories}></AddCategory>
    <hr />
    {/* <button onClick={handleAdd}>agregar</button> */}

    <ol>
    {
        categories.map((category,i)=>
            // return <li key={category+i}>{category}</li>
           (
             <GiftGrid 
             key={category+i}
             category={category}></GiftGrid>

           )
        )
    }

    </ol>
    </>
  )
}

export default GiftExpertApp