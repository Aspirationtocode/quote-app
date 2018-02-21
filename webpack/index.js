import webpackModule from './webpackModule';
import devServer from './devServer';
import plugins from './plugins';
import { DIST, CLIENT } from './constants';

export default {
	entry: [`${CLIENT}/index.js`],
	output: {
		path: `${DIST}`,
		filename: 'bundle.js',
	},
	module: webpackModule,
	devServer,
	plugins,
};
