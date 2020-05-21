import {StyleSheet} from 'react-native';
import {createStylesheet} from '../../utils/styleUtils';
import Color from '../../constants/Color';

const styles = createStylesheet({
  container: visibleA => ({
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0002',
    opacity: visibleA,
    minWidth: 100,
    zIndex: 100,
  }),
  aiContainer: visibleA => ({
    borderRadius: 8,
    padding: 24,
    backgroundColor: Color.WHITE,
    transform: [
      {
        scale: visibleA.interpolate({
          inputRange: [0, 0.9, 1],
          outputRange: [0.8, 1.1, 1],
        }),
      },
    ],
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
