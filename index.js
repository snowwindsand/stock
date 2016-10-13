import React from 'react'
import {
	render
} from 'react-dom'

import { hashHistory } from 'react-router';

import configureStore from './stores/configureStore'
import Root from './containers/Root'
import { queryDataAsync } from './actions/index'

const initStores = {
	stockcodes: ['sh601003', 'sh601001'],
	stockdatas: []
}

const store = configureStore(initStores);
store.dispatch(queryDataAsync());

render(
	<Root store={store} history={hashHistory} />,
	document.getElementById('root')
)
