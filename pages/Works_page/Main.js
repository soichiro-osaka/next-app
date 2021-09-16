import styles from './styles/Main.module.css'
import Sidemenu from './Sidemenu'
import Content from './Content'

export default function Main () {
    return(
        <div className={styles.main}>
            <Sidemenu className={styles.item}></Sidemenu>
            <Content className={styles.item}></Content>
        </div>
    )
}