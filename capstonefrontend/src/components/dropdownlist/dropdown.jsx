import React from 'react'

export default function dropdown() {
    return (
        <>
        <div>
            <div className="head-items">
            <label for="hats">Choose a HEAD item:</label>
            <select name="head-items" id="head">
                <option value=""></option>
                <option value="">Read Beanie</option>
                <option value="">Umbrella</option>
                <option value="">Sunglasses</option>
            </select>
            </div>
            <div className="top-items">
            <label for="tops">Choose a TOP:</label>
            <select name="top-items" id="top">
                <option value=""></option>
                <option value="">Rain Coat</option>
                <option value="">Blue Hoodie</option>
                <option value="">Tank</option>
            </select>
            </div>
            <div className="pants-items">
            <label for="pants">Choose your PANTS:</label>
            <select name="pant-items" id="pants">
                <option value=""></option>
                <option value="">Chinos</option>
                <option value="">Corduroys</option>
                <option value="">Short shorts</option>
            </select>
            </div>
            <div className="shoes-items">
            <label for="shoes">Choose a SHOE:</label>
            <select name="shoe-items" id="shoe">
                <option value=""></option>
                <option value="">Rainboots</option>
                <option value="">Reeboks</option>
                <option value="">Birkenstock</option>
            </select>
            </div>
            <br></br>
            <input type="submit" value="Submit"/>
            
           
        </div>
        </>
    )
}
