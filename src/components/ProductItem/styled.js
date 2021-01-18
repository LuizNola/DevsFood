import styled from 'styled-components';

export const ItemArea = styled.div`
   
    display: flex;
    justify-content:space-between;
    align-items: center;
    box-sizing: border-box;
   
    background-color:#fff;

    margin-bottom: 15px;
    padding: 8px;
    
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 16);
    cursor: pointer;
`

export const LeftSide = styled.div`

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

export const NextImg = styled.img`
     

     width: 15px;
     height: 15px;
`