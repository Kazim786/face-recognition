import React from 'react'


const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className = 'cemter ma'>
            <div className= 'absolute mt2'>
                <img width='500px' height='auto' src = {imageUrl} className = 'center' alt = 'sample'></img>
            </div>
            
        </div>

    )
}

export default FaceRecognition