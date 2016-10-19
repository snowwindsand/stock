
import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import ReactDOM from 'react-dom'
import {createSelector} from 'reselect'
import {bindActionCreators} from 'redux'

import Test from '../components/test.js'
import * as StockActions from '../actions/index'

const textSelector = (state) => state.error.errorText


const testSelector = createSelector(
	[textSelector],
	(testInfo)=>{
		return{
			messageInfo:testInfo,
		}
	}
)

/*const mapStateToProps = (state) => {
	return {
		stocks: state.stockdatas
	}
}*/

const mapDispatchToProps = (dispatch) => {
	return {
		onMessage:(msg)=>dispatch(StockActions.errorHappended(msg)),
	}
}

export default connect(
	testSelector,
	mapDispatchToProps
)(Test)