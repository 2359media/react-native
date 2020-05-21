import {createStylesheet} from '../../utils/styleUtils';

const styles = createStylesheet({
  container: (safeArea, isScrollView) => ({
    flexGrow: 1,
    paddingLeft: isScrollView ? safeArea.left + 24 : 0,
    paddingRight: isScrollView ? safeArea.right + 24 : 0,
    paddingBottom: safeArea.bottom + (isScrollView ? 24 : 0),
    paddingTop: isScrollView ? 24 : 0,
  }),
});

export default styles;
