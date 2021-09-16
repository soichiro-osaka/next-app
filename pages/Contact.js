import styles from '../styles/Contact.module.css'

export default function Contact() {
    const registerUser = async event => {
        event.preventDefault()
        const res = await fetch('/api/send', {
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json()
        event.target.name.value = '';
    }
    return(
        <div id="Contact">
            <h2 className={styles.heading}>CONTACT</h2>
            <div className={styles.contact}>
                <form onSubmit={registerUser}>
                    <div className={styles.contact_div}>
                        <div className={styles.div_inputs}>
                            <div className={styles.name_input}>
                                <label>Name</label>
                                <input name="name" placeholder="山田　太郎"></input>
                            </div>
                            <div className={styles.email_input}>
                                <label>Email</label>
                                <input name="email" type="email" placeholder="name@example.com"></input>
                            </div>
                        </div>
                        <div className={styles.div_textarea}>
                            <label>Message</label>
                            <textarea name="message"></textarea>
                        </div>
                        <button type="submit">送信</button>
                    </div>
                </form>
            </div>
        </div>
    )
}