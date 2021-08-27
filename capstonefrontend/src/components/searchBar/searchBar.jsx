import React, { useState } from 'react'
import Data from '../homePage/clothes.json'

export default function SearchBar() {
    const [searchItem, setSearchItem] = useState('')
    return (
        <div>
            <input className="search-bar" type="text" placeholder="Search..." onChange={event => {setSearchItem(event.target.value)}}/>
            {Data.filter((value) => {
            if(searchItem === ""){
                return ("")
            } else if (value.clotheName.toLowerCase().includes(searchItem.toLowerCase())){
                return value
                
            }
        }).map((value, key)=>{
            return(
                <div className="" key={key}>
                    <p>{value.clotheName}</p>
                </div>

            );
        })}
        
        </div>
    )
    
       
    
    
}
