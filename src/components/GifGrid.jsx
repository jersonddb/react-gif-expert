import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGigs } from "../hooks/useFetchGigs";
// import { getGifs } from "../helpers/getGifs";




export const GifGrid = ( {category} ) => {

  const { images, isLoading } = useFetchGigs( category );

 
  
  
 
  
  
    return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargado...</h2>)
        }

        <div className="card-grid">
            { 
              images.map( ( image ) => (
                <GifItem 
                key={ image.id }
                { ...image }
                />
              ))
            }     
      </div>
        
    
    </>
  )
}
