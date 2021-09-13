import styles from '../styles/AboutMe.module.css'
import Image from 'next/image'
import profile from '../images/profile.jpg'

export default function AboutMe() {
    return(
        <div id="About" className={styles.about_content}>
            <h2 className={styles.heading}>ABOUT ME</h2>
            <div className={styles.profile}>
                <div className={styles.image_div}>
                    <Image className={styles.image} src={profile} width={270} height={270}/>
                </div>
                <div className={styles.description}>
                    <h3>
                        川村　荘一郎<br/>
                        <span>Kawamura Soichiro</span>
                    </h3>
                    <ul>
                        <li>四天王寺大学経営学部経営学科四年</li>
                        <li>大阪府出身</li>
                        <li>趣味はサーフィン。最近ボクシングも始めた。</li>
                    </ul>
                    <p>
                        webフロントエンドについて学び、いずれはサーバーサイドやモバイルの技術も身につけたいと考えている。
                        「分からない」をそのままにしておくのが嫌い。
                        現在はReactjsについて勉強中。<br/>
                    </p>
                </div>
            </div>
            <h3 className={styles.skills}>SKILLS</h3>
            <div className={styles.container}>
                <div className={styles.item}>
                    <i class="fas fa-code"></i>
                    <h3>HTML/CSSコーディング</h3>
                    <p>丁寧かつ綺麗なコーディングを心がけます。</p>
                </div>
                <div className={styles.item}>
                    <i class="fab fa-js"></i>
                    <h3>Reactjsの利用</h3>
                    <p>モダンな技術を積極的に活用します。</p>
                </div>
                <div className={styles.item}>
                    <i class="fas fa-book"></i>
                    <h3>読書による幅広い知識</h3>
                    <p>文理問わず様々なジャンルについての基礎知識を身につけております。</p>
                </div>
            </div>
        </div>
    )
}