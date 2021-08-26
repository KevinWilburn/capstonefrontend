import React from 'react'


export default function LoginPage() {
    return (
        <>
        <div>
            <h1>
                Welcome to What To Wear!  
                
            </h1>
            {myFunction()} 
        </div>
        </>
        
    )
}

function myFunction() {
    return(
        <form action="/home" onSubmit="alert('This Works')">
            <label>Username:</label><br/>
            <input type="text" name=""/>
            <br/>
            <label>Password:</label>
            <br/>
            <input type="password" name=""/>
            <br/>
            <input type="submit" name=""/>
        </form>  
    
    )
    
}
