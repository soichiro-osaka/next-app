import styles from '../styles/Nav.module.css'
import {Link as Scroll} from 'react-scroll'

export default function Nav() {
    return(
    <nav className={styles.nav}>
        <div className={styles.nav_div}>
            <li className={styles.nav_li}><Scroll className={styles.nav_a} to='About' smooth={true}>ABOUT ME</Scroll></li>
            <li className={styles.nav_li}><Scroll className={styles.nav_a} to='Works' smooth={true}>WORKS</Scroll></li>
            <li className={styles.nav_li}><Scroll className={styles.nav_a} to='Contact' smooth={true}>CONTACT</Scroll></li>
        </div>
    </nav>
    )
}