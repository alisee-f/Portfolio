export default function Stage() {
    return (
      <main className="max-w-3xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4 text-center">Stage</h1>
  
        <p className="text-lg mb-6 text-center">
          Je suis actuellement en stage chez le <strong>Centre de Traitement Informatique CTI </strong> de Saint Etienne.<br></br>
          Cette page est dédiée à la présentation de mon stage durant 7 semaines.
        </p>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Semaine 1</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Initiation à vi et révision des commandes/droits chmod Linux.</li>
            <li>Rafraîchissement d une base de donnée à l aide de script et en configurant 
              la crontab de la BDD.</li>
            <li>Gestion d'un incident sur une base de donnée Informix lié à une requête avec 
              une erreur d'index. Vérification des bases via un script et test de requêtes afin 
              de reproduire l erreur et de retrouver l index qui pose problème.</li>
            <li>Gestion d un incident sur centréon lié à une alerte d un serveur Oracle. 
              Nettoyage des erreurs via un script, deplacement du fichier listener qui était au 
              mauvais endroit et trop gros, effacement des anciennes traces.</li>
            <li>Vérification d un rafraîchissement de base de donnée. Vérification de la crontab envoyée
              par l'agent, vérification du fichie crontab sur la BDD via user_CSM.</li>
            <li>Configuration des Tuxedos pour qu ils communiquent sur la même adresse.</li>

          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Semaine 2</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>...</li>
            <li>...</li>
          </ul>
        </section>
      </main>
    );
  }
