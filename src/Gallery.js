import React from 'react'
import {menu} from './Footer';

const Gallery = () => {
    return (
        <div>
            {menu.map(item => {
                return (
                    <ul>
                        <li key={item.title}>
                            <img src={item.picture}/>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Gallery;
