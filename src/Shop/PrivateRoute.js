import React from 'react'
import { Redirect } from 'react-router-dom'
import {useSelector} from "react-redux";
import {getCurrentAuthState} from "./redux/selectors/auth";

export default function PrivateRoute({component}) {
    const { user } = useSelector(getCurrentAuthState);
    const PrivateRoute = ({ component, ...rest }) => (
        <Route {...rest} render={(props) => (
            user === true
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    )
    return PrivateRoute;
}