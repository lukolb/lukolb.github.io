import * as React from 'react';

const useOutsideClickListener = (ref, action) => {
  const onClick = e => {
    if (!!ref && ref.current && !ref.current.contains(e.target)) {
      action();
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('mousedown', onClick);
    };
  }, []);
};

export default useOutsideClickListener;