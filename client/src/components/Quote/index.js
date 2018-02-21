import React, { Component } from 'react';
import { _Quote, _Quote__author, _Quote__date, _Quote__body } from './styles';

class Quote extends Component {
	render() {
		const { date, author, body } = this.props;
		return (
			<_Quote>
				<_Quote__author>{author}</_Quote__author>
				<_Quote__date>{date}</_Quote__date>
				<_Quote__body>{body}</_Quote__body>
			</_Quote>
		);
	}
}

export default Quote;
