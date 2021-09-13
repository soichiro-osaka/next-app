import styles from '../styles/Contact.module.css'

export default function Contact() {
    return(
        <div id="Contact">
            <h2 className={styles.heading}>CONTACT</h2>
            <div className={styles.contact}>
                <form>
                    <div className={styles.contact_div}>
                        <div className={styles.div_inputs}>
                            <div className={styles.name_input}>
                                <label>Name</label>
                                <input></input>
                            </div>
                            <div className={styles.email_input}>
                                <label>Email</label>
                                <input></input>
                            </div>
                        </div>
                        <div className={styles.div_textarea}>
                            <label>Contents</label>
                            <textarea></textarea>
                        </div>
                        <button>送信</button>
                    </div>
                </form>
            </div>
        </div>
    )
}