import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';


function ToastShelf() {
  const elmtId = React.useId()
  const {toastData: data, removeAllToast } = React.useContext(ToastContext)

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        removeAllToast()
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)}
  },[removeAllToast]);

  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {data?.map(({message, variant},i) => {return( 
        <li 
          key={`${elmtId}-${i}`}
          className={styles.toastWrapper}
        >
          <Toast index={i} variant={variant}>{message}</Toast>
        </li>
      )})}
      
    </ol>
  );
}

export default React.memo(ToastShelf);
