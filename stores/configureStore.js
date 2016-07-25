import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleWares = [
	thunk
];

export default function configureStore(initStores) {
	const store = createStore(
		rootReducer,
		initStores,
		applyMiddleware(...middleWares)
	)
	return store;
}