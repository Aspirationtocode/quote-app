import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset}
	body {
		font-size: 16;
		line-height: 1;
	}
`;
