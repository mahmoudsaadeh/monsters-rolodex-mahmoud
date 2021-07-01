// the .component in file name is not necessary, we added it to tell what kind of file that is
import React from 'react';
import './card-list.styles.css'

import { Card } from '../card/card.component';

// a functional component
// props is the parameter that we gonna take from our functional component
// props would be any parameter that we'd pass into our CardList component in App.js file

// import this component in App.js

// props is a random name, we can choose whatever we want also

/* 
 <div className='card-list'>
            {props.children}
    </div>
*/

/* 
<div className='card-list'>
            {
                props.monsterz.map(monster => 
                    <h1 key = {monster.id}> {monster.name} </h1>
                )
            }
        </div>
*/
export const CardList = (props) => {
    //console.log(props);
    return (
        <div className='card-list'>
            {
                props.monsterz.map(monster => 
                    <Card key = {monster.id} monster={monster}/>
                )
            }
        </div>
    );
}

// return (<div>Helloyy</div>)