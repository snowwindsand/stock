import {
	combineReducers
} from 'redux'

import * as ActionTypes from '../actions/constants'

import errorReducer from './error.js'


const dataArrived = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.DATA_ARRIVED:
			return [...action.data];
		default:
			return state;
	}
}

const addStock = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_STOCK:
			if (state.includes(action.code)) {
				return state;
			} else {
				return[action.code,...state];
			}
		default:
			return state;
	}
}

// const errorReceived= (state={},action) => {
	
// }

const rootReducer = combineReducers({
	stockdatas: dataArrived,
	stockcodes: addStock,
	error: errorReducer,
})

export default rootReducer;
