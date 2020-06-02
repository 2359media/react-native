import {createStylesheet} from '../../utils/styleUtils';
import Color from '../../constants/Color';

const styles = createStylesheet({
  div: {
    marginBottom: 16,
  },
  item: safeArea => ({
    paddingHorizontal: safeArea.left + 24,
    paddingVertical: 16,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    backgroundColor: Color.WHITE,
  }),
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
