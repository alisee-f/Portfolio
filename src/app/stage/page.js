/* eslint-disable react/no-unescaped-entities */

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

          <li>Initiation à vi et révision des commandes et droits chmod sur Linux.</li>
          <li>Rafraîchissement d'une base de donnée à l'aide de scripts et en configurant 
            la crontab de la BDD.</li>
          <li>Gestion d'un incident sur une base de donnée Informix lié à une requête avec 
            une erreur d'index. Vérification des bases via un script et test de requêtes afin 
            de reproduire l'erreur et de retrouver l'index qui pose problème.</li>
          <li>Gestion d'un incident sur Centréon lié à une alerte d'un serveur Oracle. 
            Nettoyage des erreurs via un script, déplacement du fichier listener qui était au 
            mauvais endroit et trop gros, effacement des anciennes traces.</li>
          <li>Vérification d'un rafraîchissement de base de donnée. Vérification de la crontab envoyée
            par l'agent, vérification du fichier crontab sur la BDD via user_CSM.</li>
          <li>Configuration des Tuxedos pour qu'ils communiquent sur la même adresse.</li>

          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Semaine 2</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Observation de l'installation des composants d'une application via un synoptique</li>
            <li>Vérification des composants d’une application via une bulle dans le cadre d’une migration. 
              Vérification de création d’users, des droits et groupes des users. Vérification de répertoires existants et de leur droits.
              Modification et/ou création le cas échéant</li>
            <li>Création de fichiers Excel puis export en CSV dans le cadre d’un ajout de données en masse. 
              Lister les serveurs manquants sur l’outil Gestion Des Serveurs en comparants la liste des 
              serveurs disponibles dans session à la liste des serveurs disponibles dans GDS. Export en fichier CSV 
              destiné au service DSRD pour l’insérer dans des bases de données afin 
              que les serveurs soient créés et à nouveau disponibles sur GDS</li>
            <li>Vérification de la configuration d’un client Oracle via une bulle. Vérification de version sqlplus.Vérification
              du nom du service Oracle par défaut dans une variable. Vérification du contenu dans une variable dans 
              laquelle est stocké le chemin du fichier tnsnames.ora. Vérification du contenu du fichier tnsnames.ora.
              Vérification de l’adresse IP et du port de la base sur laquelle la connexion est faite. Vérification du compte 
              de connexion à la base oracle et son mot de passe via le fichier user_oracle. Vérification des accès 
              à la base de données via les commandes sqlplus compte_BD/mot_de_passe et 
              sqlplus compte_BD/mot_de_passe@nom_service_oracle</li>
          </ul>
        </section>
      </main>
    );
  }
