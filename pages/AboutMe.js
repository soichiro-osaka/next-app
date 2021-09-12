import styles from '../styles/AboutMe.module.css'
import Image from 'next/image'
import profile from '../images/profile.jpg'

export default function AboutMe() {
    return(
        <div id="About" className={styles.about_content}>
            <h2 >ABOUT ME</h2>
            <div className={styles.profile}>
                <div className={styles.image_div}>
                    <Image className={styles.image} src={profile} width={270} height={270}/>
                </div>
                <div className={styles.description}>
                    <ul>
                        <li>四天王寺大学経営学部四年</li>
                        <li>大阪府出身</li>
                        <li>趣味はサーフィン</li>
                    </ul>
                    <p>現在フロントエンドについて勉強中です。</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.item}>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.item}>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.item}>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.item}>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.item}>
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}