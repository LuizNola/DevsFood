import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 80px;
    height: 80px;
    margin-right: 8px;

    background-color: ${props=> props.active == props.id ? '#fff' : '#AAE09A'};
    border-radius: 14px;
    cursor:pointer;
    transition: all ease .2s;
`; 

export const CategoryImg = styled.img`
    width: 53px;
    height: 53px;
`

