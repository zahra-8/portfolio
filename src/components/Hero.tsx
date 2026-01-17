import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/profile.jpg"
                        alt="Fatima-Zohra Benterki"
                        width={180}
                        height={180}
                        className={styles.profileImage}
                        priority
                    />
                </div>

                <h1 className={styles.title}>
                    Bonjour, je suis <br />
                    <span className="text-gradient">Fatima-Zohra Benterki</span>
                </h1>
                <p className={styles.subtitle}>
                    Étudiante en Informatique · Passionnée de Cybersécurité · CTF player
                </p>
                <p className={styles.bio}>
                    Je suis une étudiante en informatique passionnée par la cybersécurité, avec l'ambition de construire ma carrière dans ce domaine. Je combine ma formation académique avec une pratique sur des plateformes comme TryHackMe, Root-Me et lors de challenges CTF.
                </p>
                <div className={styles.buttons}>
                    <a href="#projects" className={styles.primaryBtn}>Voir mes projets</a>
                    <a href="#contact" className={styles.secondaryBtn}>Me contacter</a>
                </div>
            </div>
        </section>
    );
}
