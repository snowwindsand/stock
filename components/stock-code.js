import React, {
	Component,
	PropTypes
} from 'react'


class StockCode extends Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(e) {
		let code = this.refs.stockCode.value;
		this.props.handleAdd(code);
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-6">
				<div className="input-group">
					<input type="text" placeholder="stockcode" ref="stockCode" className="form-control"/>
					<span className="input-group-btn">
					<button onClick={this.handleAdd} className="btn btn-primary">增加</button>
					</span>
				</div>
				</div>
			</div>)
	}
}

export default StockCode