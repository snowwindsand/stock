import React from 'react'
import _ from 'lodash'

export default ({
	stock = {}
}) => {
	if (_.isEmpty(stock)) {
		<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
	}
	else {
		return (
			<tr>
				<td>{stock.code}</td>
				<td>{stock.name}</td>
				<td>{stock.current}</td>
				<td>{stock.open}</td>
				<td>{stock.high}</td>
				<td>{stock.low}</td>
			</tr>
		);
	}
};