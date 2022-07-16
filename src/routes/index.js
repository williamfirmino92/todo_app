import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Home, About } from '../pages/index';

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
    </Switch>
)}

export default Routes;
