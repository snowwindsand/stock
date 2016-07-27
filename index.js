import React from 'react'
import {
	render
} from 'react-dom'
import {
	Provider
} from 'react-redux'

import configureStore from './stores/configureStore'
import App from './components/index'
import StockApp from './containers/index'
import {queryData,queryDataAsync} from './actions/index'

const initStores = {
	stockcodes: ['sh601003', 'sh601001'],
	stockdatas: []
}

const store = configureStore(initStores);
store.dispatch(queryDataAsync());

render(
	<Provider store={store}>
	<StockApp />
	</Provider>,
	document.getElementById('root')
)