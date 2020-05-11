import {createStylesheet} from '../../utils/styleUtils';

const styles = createStylesheet({
  container: (safeArea, isScrollView) => ({
    paddingLeft: safeArea.left + (isScrollView ? 24 : 0),
    paddingRight: safeArea.right + (isScrollView ? 24 : 0),
    paddingBottom: safeArea.bottom + (isScrollView ? 24 : 0),
    paddingTop: isScrollView ? 24 : 0,
  }),
});

export default styles;
