import styles from './Projects.module.css';

const projects = [
    {
        title: "Système de détection DDoS/DoS",
        description: "Système intelligent pour la détection et l'atténuation des attaques Web utilisant l'IA pour la supervision du réseau et la classification automatisée via API.",
        tech: ["Python", "AI/ML", "Sécurité Réseau"],
        image: "AI"
    },
    {
        title: "Simulation de Cyberattaques",
        description: "Réalisation et analyse d'attaques XSS, CSRF et SQLi à l'aide de Burp Suite et Wireshark. Documentation des vulnérabilités et de l'escalade de privilèges.",
        tech: ["DVWA", "Juice Shop", "Burp Suite"],
        image: "SEC"
    },
    {
        title: "Plateforme Time Bank",
        description: "Application web d'échange de services comprenant une authentification sécurisée, la gestion des privilèges, des logs et la protection des données.",
        tech: ["Sécurité Web", "Auth", "Base de données"],
        image: "TB"
    },
    {
        title: "Générateur de Calendrier d'Examens",
        description: "Planificateur automatique d'examens pour des sessions multi-profils utilisant un algorithme génétique pour la résolution de conflits.",
        tech: ["Python", "Algorithme Génétique", "Optimisation"],
        image: "GA"
    }
];

export default function Projects() {
    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <h2 className={styles.title}>Projets <span className="text-gradient">Sélectionnés</span></h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={`${styles.projectCard} glass`}>
                            <div className={styles.imageContainer}>
                                <div className={styles.placeholderImage}>{project.image}</div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.techStack}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>
                                <div className={styles.links}>
                                    <a href="https://github.com/zahra-8" className={styles.link}>Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
