import React from 'react'
import redbeanie from './redbeanie.jpg'
import sunglasses from './sunglasses.jpg'
import scarf from './scarf.jpg'
import peacoat from './peacoat.jpg'
import bluehoodie from './bluehoodie.jpg'
import tank from './tank.jpg'
import umbrella from './umbrella.jpg'
import raincoat from './raincoat.jpg'
import dresspants from './dresspants.jpg'
import shortshorts from './shortshorts.jpg'
import berks from './berks.jpg'
import cords from './cords.jpg'
import dressshoes from './dresshoes.jpg'
import chinos from './chinos.jpg'
import rainboots from './rainboots.jpg'
import reebok from './reebok.jpg'
import './closet.css'

export default function Closet() {
    return (
        <>
        <div className="hats">
                <h1 className="clothing-item-title">Head</h1>
                <hr className="horizontal-line"/>
                <img className="clothing-picture" alt="" src={umbrella}/>
                <img className="clothing-picture" alt="" src={redbeanie}/>
                <img className="clothing-picture" alt="" src={sunglasses}/>
                <img className="clothing-picture" alt="" src={scarf}/>
        </div>
        <div className="tops">
                <h1 className="clothing-item-title">Tops</h1>
                <hr className="horizontal-line"/>
                <img className="clothing-picture" alt="" src={raincoat}/>
                <img className="clothing-picture" alt="" src={bluehoodie}/>
                <img className="clothing-picture" alt="" src={tank}/>
                <img className="clothing-picture" alt="" src={peacoat}/>
        </div>
        <div className="pants">
                <h1 className="clothing-item-title">Pants</h1>
                <hr className="horizontal-line"/>
                <img className="clothing-picture" alt="" src={chinos}/>
                <img className="clothing-picture" alt="" src={cords}/>
                <img className="clothing-picture" alt="" src={shortshorts}/>
                <img className="clothing-picture" alt="" src={dresspants}/>
        </div>
        <div className="shoes">
                <hr className="horizontal-line"/>
                <h1 className="clothing-item-title">Shoes</h1>
                <img className="clothing-picture" alt="" src={rainboots}/>
                <img className="clothing-picture" alt="" src={reebok}/>
                <img className="clothing-picture" alt="" src={berks}/>
                <img className="clothing-picture" alt="" src={dressshoes}/>
        </div>
        </>
    )
}
