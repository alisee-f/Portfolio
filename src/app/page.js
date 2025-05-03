import Navbar from "../components/navBar";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">Bienvenue sur mon portfolio !</h1>
        <p className="mt-4 text-center">Je suis Alisée FLECHON, étudiante en BTS SIO. Ce portfolio est en construction.</p>
        
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">📄 Mon CV</h2>
          <iframe src="/CV_FLECHON.pdf"
            className="w-full h-[600px] border rounded-lg">
            Ce navigateur ne supporte pas l’affichage PDF.
          </iframe>

          <div className="text-center mt-4">
            <a href="/CV_FLECHON.pdf" 
              download 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
              Télécharger mon CV
            </a>
          </div>
        </div>
          <div className="mt-10">
  <h2 className="text-2xl font-semibold mb-4 text-center">📊 Tableau de compétences</h2>
  <iframe src="/tableauComp.pdf" 
    className="w-full h-[600px] border rounded-lg">
    Votre navigateur ne prend pas en charge l'affichage PDF.
  </iframe>

  <div className="text-center mt-4">
    <a href="/Tableau de synthèse - Épreuve E5.xlsx" 
       download 
       className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
      Télécharger le tableau
    </a>
  </div>
</div>
      </div>
    </div>
  );
}
