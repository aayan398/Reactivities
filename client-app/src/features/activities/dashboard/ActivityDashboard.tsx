import React, { useEffect } from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/layout/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponents";
 
 
 
export default observer( function ActivityDashboard( ){


 const{activityStore} = useStore();
const {loadActivities, activityRegistry} = activityStore;
 
 

 useEffect(()=> {
   if (activityRegistry.size === 0) loadActivities();
 }, [loadActivities, activityRegistry])  ///just incase something goes wrong get rid of activityRegistry

 
   if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'  />




    return(
       <Grid>
            <Grid.Column width= '10'>
              <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'> 
              <h2> Activity Filters</h2>
            </Grid.Column>
       </Grid> 
    )
})