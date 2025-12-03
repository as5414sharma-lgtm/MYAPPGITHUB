export default function Courseintro() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <p className="text-[#c27b57] leading-relaxed text-lg mb-8">
            In two years I built a profitable and solid business online, allowing me to 
            spend quality time with my family. I built a community of more than 100,000 
            female entrepreneurs on Instagram and more than 350,000 on YouTube. I have 
            had the opportunity to collaborate with companies that I admire. I am proud 
            of my content, and I discovered my true calling.
          </p>

          <p className="text-[#c27b57] leading-relaxed text-lg mb-10">
            I designed this course because I want you to succeed on Instagram too. I will 
            guide you with my academic knowledge, but more importantly, I'll share my 
            real-life experiences with you. You'll gain lots of tools for you to make 
            Instagram your main sales channel.
          </p>

          <button className="bg-[#ff8e6e] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#ff7a56] transition">
            I WANT TO LEARN MORE
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="/img section/insta.jpg"
            alt="Course Intro"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
