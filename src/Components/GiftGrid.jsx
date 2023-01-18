import React  from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
// , { useState, useEffect } 

// import { getGif } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';
 

export const GiftGrid = ({ category }) => {
    // const [images, setimages] = useState([]);
    const {data: images,loading} = useFetchGif(category);
    
    // useEffect(() => {
        
    //     getGif(category)
    //     .then(setimages );
    // }, [category])

    // const getGif = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=iYoTEDW3Jk8M7UjtMeu4rhZBOyrJtcXJ`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();

    //     const gifs = data.map((img) => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     // console.log(gifs);
    //     setimages(gifs);
    // }

    // getGif();
    return (
        <>
            <h3>{category}</h3>
            { 
                // loading ? 'Cargando...' : 'fin de carga'
                loading && <p>Cargando...</p>
            }

            <div className='card-grid'>
                 {
                    images.map((imgs) => {
                        return <GifGridItem
                            key={imgs.id}
                            {...imgs}
                        />
                    })
                } 
            </div>
           
        </>
    )
}

{/* {images.map((img)=>{
    return <li key={img.id}>{img.title}</li>
})
} */
    // images.map(({id,title})=>(
    //     <li key={id}>{title}</li>
    //     ))

} {/* <h2>{Counter}</h2>
        <button onClick={
            ()=>{setCounter(Counter+1)}
        }>try</button> */}