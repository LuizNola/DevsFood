import styled from 'styled-components'

export const CartArea = styled.div`

    position:fixed;
    bottom: 0;
    right: 30px;

    background-color: #136713;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const CartHeader = styled.div`
    display: flex;
    align-items: center;    

    width: 290px;
    height: 50px;

    cursor: pointer;
`

export const CartIcon = styled.img`
    width: 23px;
    height: auto;

    margin: 0 10px;
`  
export const CartText = styled.div`
    flex: 1;

    color: #ffffff;
    font-size: 17px;
`

export const CartBody = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
`



export const ProductsArea = styled.div`
`
export const ProductItem = styled.div`
    display: flex;       
    margin: 10px;
`
export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`
export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;

    border-radius: 10px;
`
export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;  
`
export const ProductPrice = styled.div`
    font-size: 13px;
`
export const ProductQtdArea = styled.div`
    display: flex;
    align-items: center;
`
export const ProductQticon = styled.img`
    width: 13px;
    height: auto;

    cursor : pointer;
`
export const ProductQtText = styled.div`
    color: white;
    font-size: 13px;
    font-weight: bold;

    margin: 0 7px;
`

