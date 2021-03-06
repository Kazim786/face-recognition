import React from 'react'
import 'tachyons'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className = 'f3'>
                {'This Magic Brain will detect faces in your Pictures'}
                <div className= 'p3'>
                    <img src="https://img.icons8.com/emoji/48/000000/eyes-emoji.png" alt= 'brain'/>  
                </div>
                <div className = 'form center pa4 br3 shadow-5'>
                    <div className = 'p3'>
                        <input className= 'f4 pa2 w-70 center' type= 'text' placeholder= 'Enter image URL' onChange={onInputChange} ></input>
                        <div className = 'p3'>
                            <button 
                            className= 'w-40 grow f4 link ph3 pv2 dib white bg-light-green'
                            onClick = {onButtonSubmit}>
                                Detect!
                            </button>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    )
}
// pa4 br3 shadow-5
export default ImageLinkForm

//d6b9f5b8523b4ee3967323cb1664dd11

