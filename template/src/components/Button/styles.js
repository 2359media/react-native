import {createStylesheet} from '../../utils/styleUtils';
import Color from '../../constants/Color';

const styles = createStylesheet({
  primaryContainer: tintColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    backgroundColor: tintColor,
  }),
  primaryText: () => ({
    color: Color.WHITE,
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
  }),
  primaryIcon: () => ({
    tintColor: Color.WHITE,
    margin: 4,
  }),
  barItemContainer: () => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  barItemText: tintColor => ({
    color: tintColor,
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
  }),
  barItemIcon: tintColor => ({
    tintColor,
    margin: 4,
  }),
});

export default styles;
