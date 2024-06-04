 
import { Fragment, act, useEffect, useState } from 'react'
import { Container, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';
 
function App() {
 const location = useLocation();


  return (
   <Fragment> 
    {location.pathname === '/' ? <HomePage /> : (
      <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <Outlet />
      </Container>
      </>
    )} 
     
   </Fragment>
  );
}

export default observer (App);
