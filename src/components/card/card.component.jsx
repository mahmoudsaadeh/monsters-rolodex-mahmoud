import React from 'react';
import './card.styles.css'

// set=set2 is called a url parameter, here, we are asking to use this set of images
// found on the website
// &size=180x180 --> we added it to the url
// ${props.monster.id} --> used to choose different images based on the unique id
// of each monster

// the robo hash or url is considered an API

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> {props.monster.name} </h2>
        <p>{props.monster.email}</p>
    </div>
)

