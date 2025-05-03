
export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600">Me contacter</h1>
      <a
  href="https://www.linkedin.com/in/alisée-flechon"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  Mon LinkedIn
</a>
<br></br>
<a
  href="https://github.com/alisee-f"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  Mon GitHub
</a>
      <p> Par mail : flechonalisee@gmail.com</p>
      <p> Par téléphone : 06 00 00 00 00</p>
      <p>En m'envoyant un message ici :</p>
      <form className="mt-4 max-w-xl mx-auto">
        <label className="block text-lg mb-2">Nom</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" />

        <label className="block text-lg mb-2">Email</label>
        <input type="email" className="w-full p-2 border border-gray-300 rounded mb-4" />

        <label className="block text-lg mb-2">Message</label>
        <textarea className="w-full p-2 border border-gray-300 rounded mb-4" rows="5"></textarea>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Envoyer</button>
      </form>
    </div>
  );
}