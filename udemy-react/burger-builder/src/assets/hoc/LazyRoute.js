import React, {lazy, Suspense, useMemo} from 'react';
import {Route} from "react-router"
import CircularProgress from '@material-ui/core/CircularProgress';

const LazyRoute = ({component, path}) => {
    const Componnent = useMemo(() => lazy(component), [component])
    return <Route path={path} render={(props) => {
        return <Suspense fallback={<CircularProgress/>}>
            <Componnent {...props} />
        </Suspense>
    }}
    />
}

export default LazyRoute;
