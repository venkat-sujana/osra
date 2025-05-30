import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen p-6 md:p-24 flex flex-col items-center justify-center bg-gray-100">
      {/* Button Cards */}
      <div className="absolute top-2 right-4 flex flex-col md:flex-row gap-2">

        {/* <div className="bg-white p-1 rounded-lg shadow-md border border-gray-300 mb-4">
          <Link href="/exams-form">
            <button className="w-full bg-amber-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer font-bold">
              📝&nbsp;Marks Entry Form
            </button>
          </Link>
        </div> */}

        {/* <div className="bg-white p-1 rounded-lg shadow-md border border-gray-300 mb-4">
          <Link href="/attendance-form">
            <button className="w-full bg-cyan-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer font-bold">
              📝&nbsp; Attendance Form
            </button>
          </Link>
        </div> */}

        <div className="bg-white p-1 rounded-lg shadow-md border border-gray-300 mb-4">
          <Link href="/login">
            <button className="w-full bg-slate-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer font-bold">
              📝&nbsp; Lecturer Login
            </button>
          </Link>
        </div>

        <div className="bg-white p-1 rounded-lg shadow-md border border-gray-300 mb-4">
          <Link href="/register">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer font-bold">
              📝&nbsp;Admission Form
            </button>
          </Link>
        </div>

        <div className="bg-white p-1 rounded-lg shadow-md border border-gray-300 mb-4">
          <Link href="/admin">
            <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition cursor-pointer font-bold">
              👤&nbsp; Admin
            </button>
          </Link>
        </div>
      </div>

      {/* Main Heading */}
      <div>
        <Image
          src="/images/skrlogo.png"
          alt="OSRA Logo"
          width={300}
          height={300}
          className="mt-20 border-2 border-gray-300 rounded-lg shadow-lg"
          priority
        />
      </div>
      <h1 className="text-4xl text-black font-bold mt-2">Welcome to 🧑‍🏫&nbsp;OSRA</h1>
      <h2 className="text-2xl text-black font-semibold mt-4">
        Online Student Registration App
      </h2>
      <p className="text-lg mt-2 text-center text-black">
        This is a simple online student registration app built with Next.js and
        Tailwind CSS.
      </p>
      <p className="text-lg mt-2 text-center text-black">
        <a
          href="https://github.com/venkat-sujana/osra"
          className="text-blue-500 hover:text-blue-600"
        >
          View on GitHub
        </a>
      </p>
    </div>
  );
}
