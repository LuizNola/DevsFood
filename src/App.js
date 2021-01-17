import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactToolTip from 'react-tooltip'

import { Container, Menu, PageBody } from './appStyled'

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PriviteRouter from './components/PrivateRoute'
import MenuItem from './components/MenuItem';
import Cart from './components/cart'

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" link="/"/>
                    <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders"/>
                    <MenuItem title="Perfil" icon="/assets/profile.png" link="/profile"/>
                </Menu>

                <PageBody>
                  

                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PriviteRouter exact path="/orders">
                            <div>Tela de pedidos</div>
                        </PriviteRouter>
                        <PriviteRouter exact path="/profile">
                            <div>Tela de perfil</div>
                        </PriviteRouter>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch> 

                </PageBody>
                <Cart/>
                <ReactToolTip id="tip-top" place="top" effect="solid"/>
                <ReactToolTip id="tip-right" place="right" effect="solid"/>
            </Container>
        </BrowserRouter>
    );
}