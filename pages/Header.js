import styles from '../styles/Header.module.css'
import classnames from 'classnames'

export default function Header(){
    const colorRed = classnames(styles.color_bar, styles.red_bar);
    const colorGreen = classnames(styles.color_bar, styles.green_bar);
    const colorYellow = classnames(styles.color_bar, styles.yellow_bar);
    const colorBrown = classnames(styles.color_bar, styles.brown_bar);
    return(
        <>
        <div className={styles.header_div}>
            <h1 className={styles.header_h1}>Welcom to<br/>My Portfolio!</h1>
            <div className={colorRed}></div>
            <div className={colorGreen}></div>
            <div className={colorYellow}></div>
            <div className={colorBrown}></div>
        </div>
        </>
    )
}