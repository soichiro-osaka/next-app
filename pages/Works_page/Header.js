import styles from './styles/Header.module.css';

export default function Header() {
    return(
        <div className={styles.header_div}>
            <h1 className={styles.header_h1}>Weather Now</h1>
        </div>
    )
}