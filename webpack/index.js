import module from './module';
import devServer from './devServer';
import plugins from './plugins';
import { DIST, CLIENT } from './constants';

export default {
	entry: `${CLIENT}/index.js`,
	output: {
		path: `${DIST}`,
		filename: 'bundle.js',
	},
	module,
	devServer,
	plugins,
};
