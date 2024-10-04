import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';


function ToastShelf() {
  const elmtId = React.useId()
  const {toastData: data } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
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
