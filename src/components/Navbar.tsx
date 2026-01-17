import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} glass`}>
            <div className={`container ${styles.navContainer}`}>
                <div className={`text-gradient ${styles.logo}`}>PORTFOLIO</div>
                <ul className={styles.navLinks}>
                    <li><Link href="#home">Accueil</Link></li>
                    <li><Link href="#skills">Compétences</Link></li>
                    <li><Link href="#projects">Projets</Link></li>
                    <li><Link href="#experience">Expérience</Link></li>
                    <li><Link href="#education">Formation</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
