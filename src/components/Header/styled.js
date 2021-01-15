import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    background-color: #136713;
    border-radius: 10px;
`

export const Logo = styled.img`
    width: auto;
    height: 70px;
`


export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;

    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    padding-left: 50px;

    background-color: #fff;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;

    outline: 0;
    transition: all ease .2s;
    cursor:${props=>props.active ? 'text' : 'pointer'};

`