import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './marketing-components/components/Landing';
import Pricing from './marketing-components/components/Pricing';

export default () => {
    return (<div>
        <StylesProvider>
            <BrowserRouter>
                <Route exact path= '/pricing' component={Pricing} />
                <Route  path= '/' component={Landing} />
            </BrowserRouter>
        </StylesProvider>
    </div>)
}
