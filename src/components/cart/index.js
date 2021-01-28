import React, {useState} from 'react';
import { CartArea,
         CartHeader,
         CartBody,
         CartIcon,
         CartText,
         ProductInfoArea,
         ProductQtdArea,
         ProductPrice,
         ProductName,
         ProductItem,
         ProductsArea,
         ProductPhoto,
         ProductQticon,
         ProductQtText
        } from './styled'

import { useSelector, useDispatch } from 'react-redux'



export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state=> state.cart.products)

    const [show, setShow] = useState(false)

    const handleCartClick = () => {
        setShow(!show)
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, type }
        });
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src ="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src ='/assets/down.png'/>
                }
            </CartHeader>
            <CartBody show={show}>
            <ProductsArea>
                {products.map((item, index)=>(
                    
                        <ProductItem key={index}>
                            <ProductPhoto  src={item.image}/>
                            <ProductInfoArea>
                                <ProductName>
                                    {item.name}
                                </ProductName>
                                <ProductPrice>
                                    R$ {item.price.toFixed(2)}
                                </ProductPrice>
                            
                            </ProductInfoArea>
                            <ProductQtdArea>
                                <ProductQticon 
                                src='/assets/minus.png' 
                                onClick={()=>handleProductChange(index, '-')} />
                                    <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQticon 
                                src='/assets/plus.png' 
                                onClick={()=>handleProductChange(index, '+')}/>
                            </ProductQtdArea>
                        </ProductItem>
                
                ))}
            </ProductsArea>
                

            </CartBody>
        </CartArea>
    )
}