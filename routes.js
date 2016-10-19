import React from 'react'
import { Route } from 'react-router'
import App from './containers/index'
import Test from './components/test.js'
import TestContainer from './containers/TestContainer.js'

export default (
    <Route path="/" component={TestContainer}>
    </Route>
)

