import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f2ef] py-16 px-6 md:px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src="/img section/foot.png" 
              alt="Logo"
              className="w-20"
            />
          </div>

          <h2 className="text-[#c98660] tracking-[0.4em] font-serif text-lg mb-6">
            T A T I U R I B E
          </h2>

          <div className="flex justify-center md:justify-start space-x-6 text-[#c98660] text-2xl">
            <FaInstagram />
            <FaFacebookF />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

        <div className="text-center ml-20  pl-28 md:text-left ">
          <h3 className="text-[#c98660] font-serif text-2xl mb-2">
            Let's talk
          </h3>
          <p className="text-[#c98660]">info@tatiuribe.com</p>
          <p className="text-[#c98660] mt-1">+67 002 344 13 65</p>
        </div>

        <div className="text-center ml-20 pl-20 md:text-left">
          <h3 className="text-[#c98660] font-serif text-2xl mb-2">
            Policies
          </h3>

          <ul className="space-y-1">
            <li>
              <a href="#" className="text-[#c98660] underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#c98660] underline">
                Terms and conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
