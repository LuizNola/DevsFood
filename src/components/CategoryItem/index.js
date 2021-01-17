import React from 'react';
import { Container, CategoryImg } from './styled'

export default ({ data, activeCat, setActiveCat, title,  }) => {

    const handleCatClick = () =>{
        setActiveCat(data.id)
      
    }

    return (
        <Container data-tip={title} data-for="tip-top"active={activeCat} id={data.id}>
            <CategoryImg src={data.image} onClick={handleCatClick} />
        </Container>
    );
}