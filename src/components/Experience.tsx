import styles from './Experience.module.css';

const experienceData = [
    {
        date: "Juillet 2025 – Sept 2025",
        role: "Stagiaire Chef de Projet IT",
        company: "VNB-IT",
        description: "Coordination des tâches de projets IT et garantie de la conformité aux normes de cybersécurité. Participation à la gestion d'équipe et au suivi des tâches."
    },
    {
        date: "Juin 2024",
        role: "Stagiaire Service Technique",
        company: "Service Technique Hospitalier",
        description: "Participation à la gestion et à l'optimisation des bases de données médicales. Maîtrise des techniques d'organisation, de mise à jour et de sécurité des données."
    }
];

export default function Experience() {
    return (
        <section id="experience" className={`section ${styles.experience}`}>
            <div className="container">
                <h2 className={styles.title}>Mes <span className="text-gradient"> Expériences</span></h2>
                <div className={styles.timeline}>
                    {experienceData.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.date}>{item.date}</div>
                            <h3 className={styles.role}>{item.role}</h3>
                            <div className={styles.company}>{item.company}</div>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
