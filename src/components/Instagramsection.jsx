export default function InstagramSection() {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-3xl font-semibold text-[#c57c5a] mb-10">
        You're invited to join my journey on Instagram
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <img
          src="/img section/instimg1.png"
          alt="Post 1"
          className="w-full h-full object-cover rounded-lg shadow-sm"
        />
        <img
          src="/img section/instimg2.png"
          alt="Post 2"
          className="w-full h-full object-cover rounded-lg shadow-sm"
        />
        <img
          src="/img section/instimg3.png"
          alt="Post 3"
          className="w-full h-full object-cover rounded-lg shadow-sm"
        />
        <img
          src="/img section/instimg4.png"
          alt="Post 4"
          className="w-full h-full object-cover rounded-lg shadow-sm"
        />
      </div>
       <div className="flex justify-center mt-10">
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#c57c5a] text-white text-lg rounded-full font-medium shadow-md hover:bg-[#b36d4f]   hover:text-black transition-all"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
