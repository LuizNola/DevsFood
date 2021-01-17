import styled from 'styled-components';

export const ItemArea = styled.div`
   
    display: flex;
    box-sizing: border-box;
    
    width: 32%;

    background-color:#fff;

    margin-right: 1.3%;
    margin-bottom: 15px;
    padding: 8px;
    
    border-radius: 8px;
    cursor: pointer;
`

export const LeftSide = styled.div`
    
    margin-right: 10px;

    img{
        
        border-radius: 10px;

        width: 110px;
        height: auto;
    }
`

export const RightSide = styled.div`
    h2,span,p{
        color: #00980d;
        margin: 0;
    }
`