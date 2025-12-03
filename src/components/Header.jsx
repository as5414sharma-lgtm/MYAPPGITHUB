import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full py-6 sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        <div className="w-auto">
          <img className="w-64 pl-9" src="/img section/img1.png" />
        </div>

        <nav className="flex gap-12 text-amber-800 font-medium items-center">

          <Link
            to="/"
            className="border-b-2 border-amber-800 pb-1 text-amber-600  no-underline hover:text-black hover:border-black"
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className="text-amber-600 hover:text-black hover:underline hover:border-black"
          >
            About me
          </Link>

          {/* Courses Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-amber-600 hover:text-black">Courses</span>
              <span>▼</span>
            </div>

            <div className="
              absolute 
              left-0 
              top-full  
              hidden 
              group-hover:block 
              bg-white 
              shadow-lg 
              rounded-md 
              p-3 
              w-56
            ">
              <Link
                to="/Courses/instagram"
                className="block px-3 py-2 hover:bg-amber-100 text-amber-600 hover:text-black rounded"
              >
                Instagram Course
              </Link>

              <Link
                to="/Courses/productivity"
                className="block px-3 py-2 hover:bg-amber-100 text-amber-600 hover:text-black rounded"
              >
                Productivity Course
              </Link>

              <Link
                to="/Courses/personal-branding"
                className="block px-3 py-2 hover:bg-amber-100 text-amber-600 hover:text-black rounded"
              >
                Personal Branding Course
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-amber-600 hover:text-black">
                Personalized Mentoring
              </span>
              <span>▼</span>
            </div>

            <div className="
              absolute
              left-0
              top-full
              hidden
              group-hover:block
              bg-white
              shadow-lg
              rounded-md
              p-3
              w-56
            ">
              <Link
                to="/Personalized/1hour"
                className="block px-3 py-2  text-amber-600 hover:bg-amber-100 hover:text-black rounded"
              >
                1 Hour Consultation
              </Link>

              <Link
                to="/Personalized/8week"
                className="block px-3 py-2  text-amber-600 hover:bg-amber-100 hover:text-black rounded"
              >
                8 Week Course
              </Link>
            </div>
          </div>

          <Link
            to="/Conferences"
            className="text-amber-600 hover:text-black hover:border-black"
          >
            Conferences
          </Link>

        </nav>
      </div>
    </header>
  );
}
