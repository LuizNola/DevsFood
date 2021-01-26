import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
    
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

export default ({data, setStatus, setQtdProd, qtdProd }) =>{

    const dispatch = useDispatch()

    const HandleClickCancel = () =>{
        setStatus(false)
        
    }
    const HandleMinusQt = () => {
        if(qtdProd  > 1){
            setQtdProd(qtdProd - 1)
        }
    }
    const HandlePlusQt = () => {
        setQtdProd(qtdProd + 1)
    }

    const HandleClickAddCart = () => {

        dispatch({
            type: 'ADD_PRODUCT',
            payload:{ data, qt: qtdProd }
        })

        setStatus(false)
    }


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
                            <ProductQtImg onClick={HandleMinusQt}src="/assets/minus.png"/>
                                <ProductQtText>
                                  {qtdProd}
                                </ProductQtText>
                            <ProductQtImg onClick={HandlePlusQt} src="/assets/plus.png"/>
                        </ProductQtd>
                        {data.price &&
                        <ProductPrice>
                            <span>{(data.price * qtdProd).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  }</span>
                        </ProductPrice>
                        }
                    </InfoQuantityArea>
                </ProductInfo>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={HandleClickCancel}>Cancelar</ProductButton>
                <ProductButton onClick={HandleClickAddCart}>Adicionar ao carrigo</ProductButton>
            </ProductButtons>
        </Container>
    )
}