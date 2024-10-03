import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("notice");
  const [isToastShown, setIsToastShown] = React.useState(false)

  const handleClickToast = () => {
    // window.alert(`message= ${message}, type= ${type}`);
    setIsToastShown(true)
  }

  const handleDismissToast = () => {
    setIsToastShown(false)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastShown && (<Toast variant={type} message={message} dismiss={handleDismissToast} />)}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
            id="message" 
            className={styles.messageInput} 
            value={message}
            onChange={(event) => { setMessage(event.target.value) }}
            
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (
              <label 
                key={`variant-${variant}`}
                htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant-type"
                  value={variant}
                  checked={type === variant}
                  onChange={(event) => {
                    
                    setType(event.target.value)
                  }}
                />
                {variant}
            </label>
            ))};
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button
              onClick={handleClickToast}
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
