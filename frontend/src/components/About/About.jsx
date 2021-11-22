import React from 'react'
import Characters from './characters/Characters'
import Titulo from './Titulo/Titulo'
// import link from './zelda.png'
import './About.scss'

export default function About() {
    return (
        <div>
              <div class="imagenAbout">
                  <Titulo/>
        </div>
            <Characters/>
        </div>
    )
}


