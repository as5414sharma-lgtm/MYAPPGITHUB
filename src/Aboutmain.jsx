export default function Aboutmain() {
  return (
    <section className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-serif text-[#c27b57] mb-6">
            I'm thrilled you're here.
          </h2>

          <p className="text-[#6f6f6f] leading-relaxed mb-6">
            I am Tatiana Uribe Montoya, but you can call me Tati Uribe. I was 
            born and still live in Medellín, Colombia and I am 26 years old. In 
            2013 I came up with the idea of starting a blog as a hobby, and not 
            long after I started a YouTube channel. It was the best decision I 
            could have made.
          </p>

          <p className="text-[#6f6f6f] leading-relaxed mb-10">
            I am a Social Communicator and Journalist with an emphasis on 
            Digital Marketing. I am dedicated to mentoring entrepreneurs: I 
            create and organize courses and lectures. I love to undertake and 
            support entrepreneurs!
          </p>

          <p className="text-[#c27b57] font-serif">Yours truly,</p>
          <p className="text-[#c27b57] font-serif">Tati Uribe</p>
        </div>
        <div className="flex justify-center">
          <img
            src="/img section/aboutimg.png"
            alt="family"
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>

      </div>
    </section>
  );
}
