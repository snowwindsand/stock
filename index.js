import React from 'react'
import {
	render
} from 'react-dom'
import {
	Provider
} from 'react-redux'
import configureStore from './stores/configureStore'
import App from './components/index'

const initStores = {
	stockcodes: ['sh601003', 'sh601001'],
	stockdatas: []
}

const store = configureStore(initStores);

render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
)