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

    const getRandomOutfit = () =>{
        
        let myHats =[' umbrella ', ' redbeanie ', ' sunglasses ' ]
        let myPants =[' chinos ', ' corduroys', ' shorts ']
        let myShirts = [' raincoat ', ' blue hoodie', ' tank top ']
        let myShoes = [' rainboots', ' reeboks', ' berks ']
        
        function findRandomFromCollection(array){
            let randomItem = array[Math.floor(Math.random() * array.length)];
          return randomItem;
      }
    
      function reRandomizing(hatarray, shirtarray, pantsarray, shoesarray){

        let randomItemFromHats = findRandomFromCollection(hatarray);
        let randomItemFromShirts = findRandomFromCollection(shirtarray);
        let randomItemFromPants = findRandomFromCollection(pantsarray);
        let randomItemFromShoes= findRandomFromCollection(shoesarray);
    
        let randomResultTripDetailsArray=[randomItemFromHats, randomItemFromShirts,randomItemFromPants,randomItemFromShoes];
        return randomResultTripDetailsArray;
    }

    let randomOutFit = reRandomizing(myHats, myShirts, myPants, myShoes)
    alert('Your random outfit should be' + randomOutFit);
        
        
        
    }
    

   






    return (
        <>
        <div className="container">
            <input className="inputbox" placeholder="What is the nearest city?"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}/>
            <br/>
            

            {typeof data.main === "undefined" ? (
                <div>
                    <h1></h1>
                </div>
                
            ): (
                <div className="weather">
                    <h1>{data.name}</h1>
                    <h1>{Math.round(data.main.temp)}°F</h1>
                    <h1>{data.weather[0].main}</h1>
                </div>
            )}
        </div>
        <div className="random-outfit">
          <input className="radnom outfit" type="button" placeholder="gernerate random outfit" onClick={getRandomOutfit}/>
        </div>
        </>
      
    )

}



