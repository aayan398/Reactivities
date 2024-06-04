 
import { Fragment, act, useEffect, useState } from 'react'
import { Container, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
 
function App() {
   const{activityStore} = useStore();
 

   useEffect(()=> {
   activityStore.loadActivities();
   }, [activityStore])

   
     if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'  />



  return (
   <Fragment>  
     <NavBar />
      <Container style={{marginTop: '7em'}}>
      <ActivityDashboard   />
   </Container>
   </Fragment>
  )
}

export default observer (App);
