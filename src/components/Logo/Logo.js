import React from 'react'

import Tilt from 'react-tilt'
import './logo.css'
const Logo = () => {
    return (
        <div className= 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img  src="https://img.icons8.com/emoji/48/000000/brain-emoji.png"  style = {{height: '100px', paddingTop: '11px'}}  /> </div>
            </Tilt>
            
        </div>

    )
}

export default Logo