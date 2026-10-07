import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-400 p-2 flex gap-4 text-white">
        <Link href="/" className="text-white hover:text-blue-200">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-blue-200">
          About
        </Link>
        <Link href="/contact" className="text-white hover:text-blue-200">
          Contact
        </Link>
      </nav>

      <p className="text-center">Welcome to my home page</p>

      <div className="p-8 text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6KwJRaworFPJEXRpUbOG1aEXSpVlOk94E5BefUAr5w&s=10"
          alt="Suhan Salian"
          className="w-32 h-32 rounded-full mx-auto object-cover"
        />

        <h1 className="text-3xl font-bold mt-4">Suhan Salian</h1>
        <p className="text-gray-600 mt-2">Computer Science Engineering Student</p>
        <p className="mt-2">College: Your College Name</p>
        <p>3rd Semester</p>

        <h2 className="text-xl font-bold mt-6">Skills</h2>
        <div className="flex justify-center gap-3 mt-3 flex-wrap">
          <span className="bg-gray-200 text-black px-4 py-2 rounded-lg">C</span>
          <span className="bg-gray-200 text-black px-4 py-2 rounded-lg">Python</span>
          <span className="bg-gray-200 text-black px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-gray-200 text-black px-4 py-2 rounded-lg">React</span>
          <span className="bg-gray-200 text-black px-4 py-2 rounded-lg">Next.js</span>
          <span className="bg-gray-200 text-black px-4 py-2 rounded-lg">Linux</span>
          <span className="bg-gray-200 text-black px-4 py-2 rounded-lg">Git & GitHub</span>
        </div>

        <p className="mt-6">Welcome to my home page</p>
      </div>
    </div>
  );
}