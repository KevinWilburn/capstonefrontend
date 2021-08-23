import React from 'react'


export default function Weather (){
    return (
       <>
            <div className="searchContainer">
                <div className="search">
                    <h1>Where are you located?</h1>
                    <input type = "text" id="" className="searchlocation" placeholder="Type in your location"/>
                    <button className="button">Submit</button>
                </div>
                <div id="data"></div>

            </div>
       </>
            
    )

}



