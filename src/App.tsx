import React from 'react';
import { Route, Switch,Redirect } from "react-router";
import SharedLayout from "./Layout/SharedLayout";
import {PlayLayoutRoute} from "./Layout/PlayLayout";
 import TeeterTotterPageContainer from './Pages/Play/TeeterTotterPageContainer'
function App() {  
  return (
    

      <SharedLayout>
      <Switch>
<Route exact path="/">
    <Redirect to="/Play" />
</Route>  

<Route path={["/Play"]}>
    <PlayLayoutRoute>
        <Switch>
            <Route exact  path="/Play" component={TeeterTotterPageContainer} />
       
        </Switch>
    </PlayLayoutRoute>
</Route>          
</Switch>  
          </SharedLayout>

  );
}

export default App;
