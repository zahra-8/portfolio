import styles from './Education.module.css';

const educationData = [
    {
        date: "Prévu Sept 2025",
        degree: "Licence 3 en Informatique",
        institution: "Université de Limoges",
        description: "Spécialisation dans les concepts fondamentaux de l'informatique et la programmation avancée."
    },
    {
        date: "2025",
        degree: "Bachelor en Cybersécurité",
        institution: "ESAIP École d'ingénieurs, Angers",
        description: "Focus sur la sécurité réseau, le hacking éthique et les stratégies de défense des systèmes."
    },
    {
        date: "Printemps 2025",
        degree: "Semestre Erasmus en Cybersécurité",
        institution: "BME Budapest, Hongrie",
        description: "Programme international mené en anglais, approfondissement des connaissances en cryptographie et codage sécurisé."
    }
];

export default function Education() {
    return (
        <section id="education" className={`section ${styles.education}`}>
            <div className="container">
                <h2 className={styles.title}>Formation <span className="text-gradient">Académique</span></h2>
                <div className={styles.timeline}>
                    {educationData.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.date}>{item.date}</div>
                            <h3 className={styles.degree}>{item.degree}</h3>
                            <div className={styles.institution}>{item.institution}</div>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
