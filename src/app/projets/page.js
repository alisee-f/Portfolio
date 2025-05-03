export default function Projets() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Un site pour présenter mon travail et mes compétences.",
      imageUrl: "/wip.gif"
    },
    {
      title: "Monopoly",
      description: "Un Monopoly minimaliste en Python.",
      imageUrl: "/monopoly.png",
      githubUrl: "https://github.com/alisee-f/Monopoly.git"
    },
    {
      title: "Netflix",
      description: "Un clone du site Netflix en PHP.",
      imageUrl: "/netflix.webp",
      githubUrl: "https://github.com/alisee-f/Netflux.git"
    }
  ];

  const competences = [
    "HTML", "CSS", "JavaScript", "Python", "PHP", "SQL", "Git/GitHub"
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600">Mes Projets</h1>

      {/* Section Projets */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Voir sur GitHub
              </a>
            )}
          </div>
        ))}
      </div>
      {/* Section Compétences */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Compétences acquises</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {competences.map((skill, index) => (
            <li key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full shadow text-sm font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}