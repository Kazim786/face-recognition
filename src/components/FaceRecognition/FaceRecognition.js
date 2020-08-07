import React from 'react'


const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className = 'cemter'>
            <img src = {imageUrl} alt = 'sample'></img>
        </div>

    )
}

export default FaceRecognition