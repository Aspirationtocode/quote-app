import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DIST, CLIENT } from './constants';
export default [new HtmlWebpackPlugin({ template: `${CLIENT}/index.html` })];
