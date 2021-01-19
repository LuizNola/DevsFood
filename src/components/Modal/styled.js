import styled from 'styled-components';

export const  Container = styled.div`
    display: ${props => props.status == true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.7);
    z-index: 900;
`

export const ModalBody = styled.div`
    width: 300px;
    height: 300px;
    max-height: 90vh;
    max-width: 98vh;

    overflow: scroll;

    background-color: #fff;

    border-radius: 20px;
    box-shadow: 0 0 50px #000; 


        ::-webkit-scrollbar {
            width: 0px;
        }
`