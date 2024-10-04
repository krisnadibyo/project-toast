import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = React.useState([]);
  console.log({toastData})


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

  return (
    <ToastContext.Provider
      value={{toastData, addToast, removeToast}}
    >
      {children}
    </ToastContext.Provider>

  );
}

export default ToastProvider;
