export default function Quotesection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        <div>
          <p className="text-[#c27b57] text-lg leading-relaxed mb-6">
            One of my great passions in life is communicating with people.
            There's nothing better than captivating them through high-value
            content and impacting their lives through personal and professional
            experiences.
          </p>

          <p className="text-[#c27b57] text-lg leading-relaxed mb-10">
            I have been a speaker at different national and international events
            and conferences for more than 5 years. I talk about professional
            transformation and share practical knowledge about success, sales and
            marketing.
          </p>

          <button className="bg-[#f77e69] text-white py-3 px-10 rounded-full text-sm font-semibold hover:bg-[#e96b56] transition">
            I WANT A QUOTE
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="/img section/confer.jpg"
            alt="Speaker"
            className="w-[70%] rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
