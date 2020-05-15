import {createStylesheet} from '../../utils/styleUtils';
import Color from '../../constants/Color';

const styles = createStylesheet({
  container: (safeArea, modal) => ({
    paddingTop: modal ? 0 : safeArea.top,
    paddingLeft: safeArea.left,
    paddingRight: safeArea.right,
    backgroundColor: Color.WHITE,
    zIndex: 100,
    shadowColor: Color.BLACK,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  }),
  bar: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: sideWidth => ({
    minWidth: sideWidth,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  center: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: 8,
    justifyContent: 'center',
  },
  title: sideWidth => ({
    left: sideWidth,
    right: sideWidth,
    position: 'absolute',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.BLACK,
  }),
  right: sideWidth => ({
    minWidth: sideWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }),
});

export default styles;
