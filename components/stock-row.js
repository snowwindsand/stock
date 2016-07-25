import React from 'react'

export default ({
	stock
}) => (
	<tr>
		<td>{code}</td>
		<td>{name}</td>
		<td>{current}</td>
		<td>{open}</td>
		<td>{high}</td>
		<td>{low}</td>
	</tr>
);