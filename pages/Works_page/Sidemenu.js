import styles from './styles/Sidemenu.module.css'
import Link from 'next/link'

export default function Sidemenu() {
    return(
        <div className={styles.sidemenu}>
            <ul>
                <li>ダミーグラフ</li>
                <li>ダミーグラフ</li>
                <li>ダミーグラフ</li>
                <li>ダミーグラフ</li>
            </ul>
        </div>
    )
}