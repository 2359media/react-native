import {createStylesheet} from '../../utils/styleUtils';

const styles = createStylesheet({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#999',
    marginTop: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default styles;
