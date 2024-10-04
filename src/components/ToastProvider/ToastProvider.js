import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key'

export const ToastContext = React.createContext();



function ToastProvider({ children }) {
  const [toastData, setToastData] = React.useState([]);
  console.log({toastData})
  
  useEscapeKey(() => {
    removeAllToast()
  });


  const addToast = React.useCallback( (toast) => {
    const nextToastData = [...toastData];
    nextToastData.push(toast)
    setToastData(nextToastData)
  },[toastData]);

  const removeToast = React.useCallback( (index) => {
    const nextToastData = [...toastData];
    nextToastData.splice(index,1);
    setToastData(nextToastData)
  },[toastData]);

  const removeAllToast = React.useCallback( () => {
    setToastData([])
  },[]);

  return (
    <ToastContext.Provider
      value={{toastData, addToast, removeToast, removeAllToast}}
    >
      {children}
    </ToastContext.Provider>

  );
}

export default ToastProvider;
