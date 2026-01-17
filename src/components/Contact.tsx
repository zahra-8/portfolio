import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Me <span className="text-gradient">Contacter</span></h2>
                <p className={styles.text}>
                   Un projet, une opportunité ou une question en cybersécurité ?
Je serais ravie d’en discuter. Contactez-moi !<br />
                    <span className="text-gradient">fz.benterki@gmail.com</span> | <span className="text-gradient">07 45 11 12 31</span>
                </p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Nom</label>
                        <input type="text" id="name" className={styles.input} placeholder="Votre Nom" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" className={styles.input} placeholder="votre@email.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea id="message" className={styles.textarea} placeholder="Votre message ici..."></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>Envoyer le Message</button>
                </form>
            </div>
        </section>
    );
}
