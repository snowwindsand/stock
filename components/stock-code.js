import React, {
	Component,
	PropTypes
} from 'react'

/*export const Code = ({handleAdd}) =>{
    return(
        <div>
            <input type="text" placeholder="stockcode"/>
            <button onClick={handleAdd}>增加</button>
        </div>)
}*/

class StockCode extends Component {
	constructor(props) {
		super(props);
		this.handleAdd.bind(this);
	}

	handleAdd() {
		let code = this.refs.stockCode.value;
		this.props.handleAdd(code);
	}

	render() {
		return (
			<div>
            <input type="text" placeholder="stockcode" ref="stockCode"/>
            <button onClick={this.handleAdd}>增加</button>
        </div>)
	}
}

export default StockCode