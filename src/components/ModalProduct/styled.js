import styled from 'styled-components';

export const Container = styled.div`
    width: 740px;
    padding: 20px;

`;

export const ProductArea = styled.div`
    display: flex;
    
    height: 200px;
    
    
`;
export const ProductButtons = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    margin-top: 10px;
`;
export const ProductButton = styled.button`
    
    border: 0;
    border-radius: 5px;

    color: #FFF;
    font-size: ${props=> props.small ? '13' : '22'}px;
    font-weight: bold;

    padding: 10px 20px;
    margin-left: 10px;

    background-color: #073C07;
    box-shadow: 4px 5px 0 rgba(0, 0, 0, .16);
    cursor: pointer;
`

export const ProductPhoto = styled.img  `
    width: 310px;
    border-radius: 10px; 

`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    margin-left: 10px;

`;

export const InfoDatails = styled.div`

`;
export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`
export const ProductIngredients = styled.div`
    font-size: 14px;
`

export const InfoQuantityArea = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ProductQtd = styled.div`
    display: flex;
    align-items: center;

    background-color: #073C07;
    border-radius: 5px;
`
export const ProductQtImg = styled.img`
    width: 15px;
    height: auto;

    margin: 0 10px;
`
export const ProductQtText = styled.div`
    font-weight:bold;
    font-size:25px; 
    color: #FFF;
`
export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #FFF;

    padding: 10px;
    background-color: #073C07;
    border-radius: 5px;
`