import React from 'react';
import { Container, ModalBody } from './styled'

export default ({ children, status, setStatus })=>{

    const handleModalClick = ( e ) =>{
        if(e.target.classList.contains('modalBG')){
        setStatus(false)}
    }

return(
    <>
    <Container 
    status={status} 
    onClick={handleModalClick}
    className="modalBG"
    >
         <ModalBody>
             {children}
         </ModalBody>
    </Container>
    </>
)
}