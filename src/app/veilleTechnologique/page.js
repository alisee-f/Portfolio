export default function VeilleTechnologique() {
  const styles = {
    main: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      color: '#333',
    },
    title: {
      fontSize: '2.5rem',
      color: '#007BFF',
      marginBottom: '1rem',
    },
    description: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
    },
    section: {
      marginBottom: '2rem',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#555',
      marginBottom: '1rem',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
    }
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Ma veille technologique</h1>
      <p style={styles.description}>
      Bienvenue dans mon journal de veille sur l intelligence artificielle appliquée à la psychologie clinique. Vous allez pouvoir retrouver ces thématiques :
      </p>

      <section style={styles.section}>
        <ul style={styles.list}>
          <li>Intelligence artificielle et santé mentale</li>
          <li>Thérapies numériques et chatbots</li>
          <li>Diagnostic assisté par IA</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>J ai réalisé ma veille à l aide de Google Alert</h2>
        <p>Vous pouvez la retrouver sur mon GitHub via :   
        <a href="https://github.com/alisee-f/veillePsychologieIA.git"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline">
    ce lien
</a>
</p>
        {/* <ul style={styles.list}>
          <li><a href="https://www.news-medical.net/news/20250401/Study-Mental-health-providers-often-miss-bulimia-diagnosis.aspx" style={styles.link}>Article sur l'IA et la psychologie clinique</a></li>
          <li><a href="https://exemple.com/article2" style={styles.link}>Rapport sur les chatbots en santé mentale</a></li>
        </ul> */}
      </section>
    </main>
  );
}