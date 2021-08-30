import React from 'react'
import redbeanie from './redbeanie.jpg'
import sunglasses from './sunglasses.jpg'
import bluehoodie from './bluehoodie.jpg'
import tank from './tank.jpg'
import umbrella from './umbrella.jpg'
import raincoat from './raincoat.jpg'
import shortshorts from './shortshorts.jpg'
import berks from './berks.jpg'
import cords from './cords.jpg'
import chinos from './chinos.jpg'
import rainboots from './rainboots.jpg'
import reebok from './reebok.jpg'
import './closet.css'
import logo from './avatar.png'
import SearchBar from '../searchBar/searchBar'
import dropdown from '../dropdownlist/dropdown'




export default function Closet() {

    
       
    return (
        <>
        <div className="profile">
                <div>
                {SearchBar()}
                </div>
                <div>
                {dropdown()}
                </div>

      
            <img className="profile-image" src={logo} alt="profile-pic" width="300" height="300" border-radius="50%"></img>
                <input type="file" placeholder="Upload Picture"/>
                
                
                
                <textarea className="create-about-me"/>
                <input className="submit-about-button" type="button" value="Submit Post"  />
            
        </div>
        <div className="hats">
                <h1 className="clothing-item-title">Head</h1>
                <hr className="horizontal-line"/>
                <img className="clothing-picture" alt="" src={umbrella}/>
                <input className="umbrella-input" type="text"  placeholder="item name"/>
                <img className="clothing-picture" alt="" src={redbeanie}/>
                <input className="umbrella-input" type="text"  placeholder="item name"/>
                <img className="clothing-picture" alt="" src={sunglasses}/>
                <input className="umbrella-input" type="text"  placeholder="item name"/>
                
        </div>
        <div className="tops">
                <h1 className="clothing-item-title">Tops</h1>
                <hr className="horizontal-line"/>
                <img className="clothing-picture" alt="" src={raincoat}/>
                <input className="umbrella-input" type="text"  placeholder="item name"/>
                <img className="clothing-picture" alt="" src={bluehoodie}/>
                <input className="umbrella-input" type="text"  placeholder="item name"/>
                <img className="clothing-picture" alt="" src={tank}/>
                <input className="umbrella-input" type="text"  placeholder="item name"/>
               
        </div>
        <div className="pants">
                <h1 className="clothing-item-title">Pants</h1>
                <hr className="horizontal-line"/>
                <img className="clothing-picture" alt="" src={chinos}/>
                <input className="umbrella-input" type="text"  placeholder="item name"/>
                <img className="clothing-picture" alt="" src={cords}/>
                <input className="umbrella-input" type="text" placeholder="item name"/>
                <img className="clothing-picture" alt="" src={shortshorts}/>
                <input className="umbrella-input" type="text" placeholder="item name"/>
                
        </div>
        <div className="shoes">
                <hr className="horizontal-line"/>
                <h1 className="clothing-item-title">Shoes</h1>
                <img className="clothing-picture" alt="" src={rainboots}/>
                <input className="umbrella-input" type="text" placeholder="item name"/>
                <img className="clothing-picture" alt="" src={reebok}/>
                <input className="umbrella-input" type="text" placeholder="item name"/>
                <img className="clothing-picture" alt="" src={berks}/>
                <input className="umbrella-input" type="text" placeholder="item name"/>
                
        </div>
        <div>
                
        </div>
        </>
    )
}
