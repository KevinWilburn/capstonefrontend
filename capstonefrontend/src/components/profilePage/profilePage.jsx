import React from 'react'

import './profilePage.css'

export default function ProfilePic() {
    
    const UploadImage = (files) => {
        console.log(files[0])
    }


    return (
              
        <div>
            <input type="file"
             
            onChange={(event) => {
                UploadImage(event.target.files);
            }}
            />
            
            
        
        </div>
          
        
         
    )
}
