import React from 'react';
    
import { Container,
         ProductArea,
         ProductPhoto,
         ProductInfo,
         InfoDatails,
         InfoQuantityArea,
         ProductButtons } from './styled'

export default ({data}) =>{

    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} alt=""/>
                <ProductInfo>
                    <InfoDatails>
                        {data.name}
                    </InfoDatails>
                    <InfoQuantityArea>
                        ..
                    </InfoQuantityArea>
                </ProductInfo>
            </ProductArea>
            <ProductButtons>

            </ProductButtons>
        </Container>
    )
}