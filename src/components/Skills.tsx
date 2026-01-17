import styles from './Skills.module.css';

const skillCategories = [
    {
        title: "Cybersécurité",
        skills: ["Nmap", "Wireshark", "Burp Suite", "Fail2ban", "OSINT", "SIEM", "OWASP Top 10"]
    },
    {
        title: "Systèmes & Réseaux",
        skills: ["Windows Server", "Active Directory", "DNS/DHCP", "VPN", "Routage", "Firewalls", "Docker", "Linux (Kali, Ubuntu)"]
    },
    {
        title: "Programmation",
        skills: ["Python", "Java", "C", "C++", "PowerShell", "Bash", "Flutter", "Dart"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <div className="container">
                <h2 className={styles.title}>Compétences <span className="text-gradient">Technique</span></h2>
                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className={`${styles.categoryCard} glass`}>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className={styles.skillTag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
