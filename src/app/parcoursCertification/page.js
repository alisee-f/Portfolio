export default function ParcoursCertification() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-green-600 mb-4 text-center">Mon parcours de certification</h1>
      
      <p className="text-lg mb-6 text-center">
        Je suis en train de suivre plusieurs formations et certifications. Voici les principales :
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">📜 Certifications en cours</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Certification FreeCodeCamp : Anglais A2</li>
          <li>Certification 2 : ...</li>
          {/* Tu peux en ajouter autant que tu veux ici */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">📜 Certifications acquises</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Certification SecNum de l’ANSSI - 2024</li>
          <li> Pix niveau 522 - mars 2022</li>
          {/* Tu peux en ajouter autant que tu veux ici */}
        </ul>
      </section>
    </main>
  );
}