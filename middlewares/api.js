import $ from 'jquery'
import * as ActionTypes from '../actions/constants'
import * as Actions from '../actions/index'

const stockUrl = 'http://http://hq.sinajs.cn/list='


const getProducts = store => next => action => {
	if (action.type == ActionTypes.QUERY_DATA) {
		let {
			stockcodes,
			stockdatas
		} = store;
		let codes = stockcodes.join(',');
		$.get(stockUrl + codes).done(data => {
			dispatch(Actions.dataArrived(data))
		});
	}
	return next(action);
}