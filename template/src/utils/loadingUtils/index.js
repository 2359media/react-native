import React, {useState, useCallback} from 'react';

export const Loading = {
  show: text => {},
  hide: () => {},
};

export const LoadingContainer = ({LoadingView, children}) => {
  const [state, setState] = useState({visible: false});

  Loading.show = useCallback(text => setState({visible: true, text}), []);
  Loading.hide = useCallback(() => setState({visible: false, text: null}), []);

  return (
    <>
      <LoadingView {...state} />
      {children}
    </>
  );
};
