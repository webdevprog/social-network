import React, {Suspense} from 'react';
import Preloader from '../components/common/Preloader/Preloader';

const withSuspense = (Component) => {

    const withSuspenseComponent = (props) => {
        return (<Suspense fallback={<div>Loading...</div>}><Component {...props} /></Suspense>)
    };

    return withSuspenseComponent;
}

export default withSuspense;