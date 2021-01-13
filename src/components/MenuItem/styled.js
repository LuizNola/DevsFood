import styled from 'styled-components'
import { Link } from 'react-router-dom' 

export const LinkArea = styled(Link)`
  background-color: ${props => (props.active ? "#0b4d0b" : "transparent")};
  display: flex;

  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  margin-bottom: 10px;

  border-radius: 10px;

`;

export const LinkIcon = styled.img`
    width: 34px;
    height: auto;
` 