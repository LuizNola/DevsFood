import React from 'react';
import { Container, CategoryImg } from './styled'

export default ({ data, activeCat, setActiveCat }) => {

    const handleCatClick = () =>{
        setActiveCat(data.id)
    }

    return (
        <Container active={activeCat} id={data.id}>
            <CategoryImg src={data.image} onClick={handleCatClick} />
        </Container>
    );
}