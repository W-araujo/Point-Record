import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from '../pages/Logon';
import ProfileADM from '../pages/Profile-adm'
import ProfileEMP from '../pages/Profile-emp'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/registered_time/list/unique" component={ProfileEMP} />
                <Route path="/registered_time/list/all" component={ProfileADM} />
            </Switch>
        </BrowserRouter>

    )
}
