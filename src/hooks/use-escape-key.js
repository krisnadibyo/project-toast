import React from "react";


function useEscapeKey(action) {
  React.useEffect(() => {

    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        action()
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)}
  },[action]);
}


export default useEscapeKey;