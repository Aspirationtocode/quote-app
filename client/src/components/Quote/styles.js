import styled from 'styled-components';

export const _Quote = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 10px;
	max-width: 400px;
	margin: 0 auto;
	border: 2px dashed #666;
`;

export const _Quote__author = styled.div`
	font-family: 'LoraBold';
	flex: 1;
	margin-bottom: 10px;
`;

export const _Quote__date = styled.div`
	font-family: 'LoraBold';
`;

export const _Quote__body = styled.h1`
	font-family: 'LoraItalic';
	width: 100%;
	line-height: 1.2;
	font-size: 1.1rem;
`;
