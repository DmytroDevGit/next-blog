import { CSSProperties } from "react";

// styles
import styles from "./Loader.module.css";

type Props = {
  color?: string;
}

export default function Loader({...props}: Props) {
  const { color = '#ccc' } = props;
  const loaderColor = { '--loader-color': color } as CSSProperties;

  return (
    <div className={`${styles['loader']}`} style={ loaderColor }>
      <div className={`${styles['bar1']}`}></div>
      <div className={`${styles['bar2']}`}></div>
      <div className={`${styles['bar3']}`}></div>
      <div className={`${styles['bar4']}`}></div>
      <div className={`${styles['bar5']}`}></div>
      <div className={`${styles['bar6']}`}></div>
      <div className={`${styles['bar7']}`}></div>
      <div className={`${styles['bar8']}`}></div>
      <div className={`${styles['bar9']}`}></div>
      <div className={`${styles['bar10']}`}></div>
      <div className={`${styles['bar11']}`}></div>
      <div className={`${styles['bar12']}`}></div>
    </div>
  )
}


