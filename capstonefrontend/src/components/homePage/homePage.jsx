import React, { useState } from 'react'
import './weatherapi.css'


export default function Weather (){

    const apiKey = '23772045840c74c98686f483cb98be2d'
    const [data, setData] = useState([{}])
    const [city, setCity] = useState("")


    const getWeather = (event) => {
        if(event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setData(data)
                }
            )
            
        }
    }



    return (
        <div className="container">
            <input className="inputbox" placeholder="What is the nearest city?"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}/>
            <br/>
            

            {typeof data.main === "undefined" ? (
                <div>
                    <h1>Welcome!</h1>
                </div>
                
            ): (
                <div className="weather">
                    <h1>{data.name}</h1>
                    <h1>{Math.round(data.main.temp)}°F</h1>
                    <h1>{data.weather[0].main}</h1>
                </div>
            )}

        </div>
      
    )

}



