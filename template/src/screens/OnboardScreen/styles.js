import {createStylesheet} from '../../utils/styleUtils';
import Color from '../../constants/Color';

const styles = createStylesheet({
  contentView: {
    justifyContent: 'center',
  },
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Color.BLACK,
    marginBottom: 24,
  },
});

export default styles;
