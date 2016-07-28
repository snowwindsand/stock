import * as Actions from './constants'


export const addStock = (code) => {
	return {
		type: Actions.ADD_STOCK,
		code
	}
}

export const removeStock = (code) => {
	return {
		type: Actions.REMOVE_STOCK,
		code
	}
}

export const queryData = () => {
	return {
		type: Actions.QUERY_DATA
	}
}

export const queryDataAsync = ()=>{
	return dispatch=>{
		setInterval(()=>{
			dispatch(queryData());
		},2000);
	}
}

export const dataArrived = (data) => {
	return {
		type: Actions.DATA_ARRIVED,
		data
	}
}

export const errorHappended = (errormsg) => {
	return{
		type:Actions.ERROR_HAPPEN,
		errormsg
	}
}