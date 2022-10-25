import { useEffect, useState } from "react"
import Starships from './Starships';

export default function Service () {

    let [starships, setStarships] = useState([])
    
    const getStarships = async () => {
       let response = await fetch('https://swapi.dev/api/starships/')
       let data = await response.json()
       setStarships(data.results)
    }

    useEffect(() => {
        getStarships()
    }, [])
    
    return( 
        <>
            {starships.map((s, index)=> {
                return(
                 <Starships key={index} starship={s} />     
                )
            })}
                  
        </>
    )
}
