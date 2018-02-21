import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { DIST, CLIENT } from './constants';

export default [
	new HtmlWebpackPlugin({ template: `${CLIENT}/index.html` }),
	new webpack.HotModuleReplacementPlugin(),
];
