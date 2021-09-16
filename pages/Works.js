 import styles from '../styles/Works.module.css'
import Link from 'next/link'
 
 export default function Works() {
     return(
         <div id="Works" className={styles.works_div}>
             <h2 className={styles.heading}>WORKS</h2>
             <div className={styles.content}>
                 <div className={styles.content_link}>
                     <div className={styles.item}>
                        <Link href={`/Works_page/Weather`}><a>Weather Now</a></Link>
                     </div>
                     <p className={styles.item}>WeatherAPIから受け取った情報をHighchartsでグラフにして分かりやすく表示します。（未完成）</p>
                 </div>
                 随時、追加して参ります。
             </div>
         </div>
     )
 }