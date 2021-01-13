import React from 'react';
import { useLocation } from 'react-router-dom' 
import { LinkArea, LinkIcon } from './styled'

export default ({ icon, link }) => {
    const location = useLocation();

    let isActive = location.pathname == link;
    return(
        <> 
        <LinkArea to={ link } active = { isActive }>
            <LinkIcon src={ icon } />
        </LinkArea>
        </>
    )
}