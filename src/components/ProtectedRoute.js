import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children,isLoggedIn,...rest}) => {
    return (
        <Route
            {...rest}
            render={() => 
                ( isLoggedIn ?
                (children) :
                <Redirect to="/login"/>
                )
            }
        />
    );
}

export default PrivateRoute;