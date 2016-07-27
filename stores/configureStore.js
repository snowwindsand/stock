import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import api from '../middlewares/api'

const middleWares = [
	thunk, ...api
];

export default function configureStore(initStores) {
	const store = createStore(
		rootReducer,
		initStores,
		compose(
			applyMiddleware(...middleWares),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	)
	return store;
}