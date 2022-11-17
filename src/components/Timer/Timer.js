import styles from './Timer.module.scss';

const Timer = ({time}) => {
  const convert = (ms) => {
    let h,m,s, msec;
    h = Math.floor(ms / 3600000);
    m = Math.floor((ms % 3600000) / 60000);
    s = Math.floor((ms % 3600000) / 1000);
    msec = (ms % 3600000) - (s * 1000);
    if (s > 59) {
      m =+ Math.floor(s / 60);
      s = (s % 60);
    }
    if (m > 59) {
      h =+ Math.floor(m / 60);
      m = (m % 60);
    }

    return (h + ':' + m + ':' + s + ':' + msec);
  }
    return (
        <div className={styles.timer}>
            {convert(time)}
        </div>
    );
}

export default Timer;