import React, { useState } from 'react'
import Data from '../homePage/clothes.json'

export default function SearchBar() {
    const [searchItem, setSearchItem] = useState('string')
    return (
        <div>
            <input className="search-bar" type="text" placeholder="Search..." onChange={e => {setSearchItem(e.target.value)}}/>
            {Data.filter((value) => {
            if(searchItem === ""){
                return value
            } else if (value.clotheName.toLowerCase().includes(searchItem.toLowerCase())){
                return value
            }
        })}
        </div>
    
       
    )
    
}
