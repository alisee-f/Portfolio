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
            <li>...</li>
            <li>..</li>
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