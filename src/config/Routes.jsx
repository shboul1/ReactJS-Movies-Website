import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Detail from '../pages/Detail'

const Routes = () => {
    return (
        <Switch>
               <Route exact path='/'>
                   <Home />
               </Route>
               <Route path='/:category/:id'>
               <Detail />
               </Route>
               <Route path='/:category'>
                    <Catalog />
               </Route>
               <Route path='*'>
               <h1>hi</h1>
               </Route>
           </Switch>
    )
}

export default Routes

