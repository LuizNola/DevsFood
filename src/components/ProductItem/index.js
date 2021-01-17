import React from 'react';
import { ItemArea, LeftSide, RightSide } from './styled'

export default ({ name, image, ingredients, price }) => {
    return (
        <>
         <ItemArea>
            <LeftSide>
                <img src={image}/>
            </LeftSide>

            <RightSide>
                <h2>{name}</h2>
                <span>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <p>{ingredients}</p>
            </RightSide>
         </ItemArea>
        </>
    )
}