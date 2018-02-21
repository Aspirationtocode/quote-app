import { injectGlobal } from 'styled-components';
import LoraRegular from '../static/fonts/lora/Lora-Regular.ttf';
import LoraBold from '../static/fonts/lora/Lora-Bold.ttf';
import LoraItalic from '../static/fonts/lora/Lora-Italic.ttf';
import LoraBoldItalic from '../static/fonts/lora/Lora-BoldItalic.ttf';

injectGlobal`
  @font-face {
    font-family: LoraRegular;
    src: url('${LoraRegular}');
  }
	@font-face {
    font-family: LoraBold;
    src: url('${LoraBold}');
  }
	@font-face {
    font-family: LoraItalic;
    src: url('${LoraItalic}');
  }
	@font-face {
    font-family: LoraBoldItalic;
    src: url('${LoraBoldItalic}');
  }
`;
