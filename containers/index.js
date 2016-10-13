import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import ReactDOM from 'react-dom'
import {createSelector} from 'reselect'
import {bindActionCreators} from 'redux'
import StockCode from '../components/stock-code'
import StockTable from '../components/stock-table'
import * as StockActions from '../actions/index'

class StockApp extends Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		// this.handleEnter = this.handleEnter.bind(this);
	}
	componentDidMount(){
		ReactDOM.findDOMNode(this).addEventListener('enter',this.handleEnter);
	}
	handleAdd(code) {
		const { actions } = this.props;
		actions.addStock(code);
	}
	//mapStateToProps已经转换
	render() {
		const {
			stocks
		} = this.props;
		return (
			<div className="container">
				<div className="row">
					<StockCode handleAdd={this.handleAdd} />
					<StockTable stocks={stocks} />
				</div>
			</div>
		)
	}
}

const dataSelector = (state) => state.stockdatas
const codeSelector = (state) => {
	return state.stockcodes
}

const stocksSelector = createSelector(
	[dataSelector,codeSelector],
	(stockdatas,stockcodes)=>{
		return{
			stocks:stockdatas,
			codes:stockcodes
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
		actions:bindActionCreators(StockActions,dispatch)
	}
}

export default connect(
	stocksSelector,
	mapDispatchToProps
)(StockApp)