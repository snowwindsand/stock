import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import StockCode from '../components/stock-code'
import StockTable from '../components/stock-table'
import {
	addStock
} from '../actions/index'

class StockApp extends Component {
	constructor(props) {
		super(props);
		this.handleAdd.bind(this);
	}
	handleAdd(code) {
		console.log(code);
	}
	render() {
		const {
			stocks
		} = this.props;
		return (
			<div>
				<StockCode handleAdd={this.handleAdd} />
				<StockTable stocks={stocks} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		stocks: state.stockdatas
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addStock
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StockApp)