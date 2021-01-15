import React from 'react';
import { CartArea,
         CartHeader,
         CartBody,
         CartIcon,
         cartText } from './styled'

export default () => {
    return (
        <CartArea>
            <CartHeader>
                <CartIcon src ="/assets/cart.png" />
                <cartText>Meu Carrinho</cartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    )
}