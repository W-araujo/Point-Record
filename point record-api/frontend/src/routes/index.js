import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../pages/Logon';
import ProfileEMP from '../pages/Profile-emp'
import ProfileADM from '../pages/Profile-adm'


export default function Routes() {
    return (
     
            <BrowserRouter>
                <Switch>
                   
                    <Route path="/" exact component={Logon} />
              
                <Route  path="/registered_time/get_list" component={ProfileEMP} />
                    <Route path="/registered_time/list_all" component={ProfileADM} />
                </Switch>
            </BrowserRouter>
        
        )
}
