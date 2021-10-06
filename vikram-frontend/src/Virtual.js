import React from 'react'
import ReactPlayer from 'react-player'

function Virtual() {
    return(
        <div>
            <h2>Can’t join us in-studio? Don’t worry! Get the same intense workout from the comfort of your own home.</h2>

            <h1>Interested in Learning? Turn the volume up!</h1>
            <p>Interested in Learning? Turn the volume up! </p>

            <ReactPlayer  playing='true' url='https://bikramyogawellnessworks.com/video/Virtual_Classes_Promo.mp4' />
        </div>
    )
    
}

export default Virtual;