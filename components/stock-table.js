import React from 'react'
import StockRow from './stock-row'

export default ({
	stocks
}) => {
	let rows = [];
	stocks.map((stock) => {
		rows.push(<StockRow stock={stock} key={stock.code} />);
	});

	return (
		<table>
			<thead>
				<tr>
					<th>代码</th>
					<th>名称</th>
					<th>当前</th>
					<th>开盘</th>
					<th>最高</th>
					<th>最低</th>
				</tr>
				<thead>
			<tbody>
			{rows}
			</tbody>
		</table>
	)
}