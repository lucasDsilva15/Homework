import { useState } from "react";



export default function Starships ({starship}){
   let [clicked, setClicked] = useState(false) 
   return(
        <>
            {starship.name}
            <button onClick={() => setClicked(!clicked)}> More info</button>
            <br/>
        {clicked && (
            <div>
              Manufacturer: {starship.manufacturer}
              <br/>
              Cost: {starship.cost_in_credits} Credits
              <br/>
              Length: {starship.length}
              <br/>
              Max Passengers: {starship.passengers}
              <br/>
              Max Speed: {starship.max_atmosphering_speed}
            <br/>  
            </div>
            
        )}
            
        </>
    )
}