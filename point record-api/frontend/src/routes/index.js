import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from '../pages/Logon';
import ProfileEMP from '../pages/Profile-emp'
import Dashboard from '../pages/Dashboard'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/registered_time/list/unique" component={ProfileEMP} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>

    )
}
