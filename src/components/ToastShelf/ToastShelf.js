import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ data, setData }) {
  const elmtId = React.useId()
  console.log({data})

  const handleDismiss = (index) => {
    const nextData = [...data];
    nextData.splice(index,1);
    setData(nextData)
  }

  return (
    <ol className={styles.wrapper}>
      {data?.map(({message, variant},i) => {return( 
        <li 
          key={`${elmtId}-${i}`}
          className={styles.toastWrapper}
        >
          <Toast index={i} variant={variant} dismiss={handleDismiss}>{message}</Toast>
        </li>
      )})}
      
    </ol>
  );
}

export default React.memo(ToastShelf);
