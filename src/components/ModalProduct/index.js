import React from 'react';
    
import { Container,
         ProductArea,
         ProductPhoto,
         ProductInfo,
         InfoDatails,
         InfoQuantityArea,
         ProductButtons,
         ProductIngredients,
         ProductName,
         ProductButton,
         ProductQtd,
         ProductQtImg,
         ProductQtText,
         ProductPrice
        } from './styled'

export default ({data}) =>{

    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} alt=""/>
                <ProductInfo>
                    <InfoDatails>
                        <ProductName>
                        {data.name}
                        </ProductName>
                        <ProductIngredients>
                            {data.ingredients}
                        </ProductIngredients>
                    </InfoDatails>
                    <InfoQuantityArea>
                        <ProductQtd>
                            <ProductQtImg src="/assets/minus.png"/>
                                <ProductQtText>
                                    9
                                </ProductQtText>
                            <ProductQtImg src="/assets/plus.png"/>
                        </ProductQtd>
                        <ProductPrice>
                            R${data.price}
                        </ProductPrice>
                    </InfoQuantityArea>
                </ProductInfo>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true}>Cancelar</ProductButton>
                <ProductButton>Adicionar ao carrigo</ProductButton>
            </ProductButtons>
        </Container>
    )
}