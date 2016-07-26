import {
	combineReducers
} from 'redux'

import * as ActionTypes from '../actions/constants'


const dataArrived = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.DATA_ARRIVED:
			return Object.assign({}, state, {
				stockdatas: action.data
			})
		default:
			return state;
	}
}

const addStock = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.ADD_STOCK:
			let codes = state.stockcodes || [];
			if (codes.includes(action.code)) {
				return state;
			} else {
				codes.push(action.code);
				return Object.assign({}, state, {
					stockcodes: codes
				})
			}
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	stockdatas: dataArrived,
	stockcodes: addStock
})

export default rootReducer;