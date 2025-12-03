import { FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export default function LearnSection() {
  return (
    <section className="w-full py-24 bg-white text-center">
      <h1 className="text-4xl md:text-4xl font-semibold text-[#d4a078]">
        Learn something new every day
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-lg text-amber-700 leading-relaxed">
        On my social networks, I talk about entrepreneurship, productivity,
        and personal development. I'll tell you everything I have done with
        my company and share the growth strategies that we use with our clients.
      </p>
      <div className="flex justify-center gap-10 mt-10 text-[#d4a078] text-3xl">
        <FaInstagram className="cursor-pointer hover:scale-110 transition" />
        <FaYoutube className="cursor-pointer hover:scale-110 transition" />
        <FaPlay className="cursor-pointer hover:scale-110 transition" />
        <FaTiktok className="cursor-pointer hover:scale-110 transition" />
        <FaSpotify className="cursor-pointer hover:scale-110 transition" />
      </div>
    </section>
  );
}
