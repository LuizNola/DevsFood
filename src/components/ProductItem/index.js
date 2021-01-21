import React from 'react';
import { ItemArea, LeftSide, RightSide, NextImg } from './styled'

export default ({ data,onClick }) => {
    const handleClick = () => {
        onClick(data)
    }
    return (
        <>
         <ItemArea onClick ={handleClick}>
            <LeftSide>
                <img src={data.image}/>
            </LeftSide>

            <RightSide>
                <h2>{data.name}</h2>
                <span>{data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <p>{data.ingredients}</p>
            </RightSide>
            <NextImg src="/assets/next.png"/>
         </ItemArea>
        </>
    )
}