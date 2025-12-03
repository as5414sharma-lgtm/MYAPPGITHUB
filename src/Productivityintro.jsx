export default function Productivityintro() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                <div>
                    <p className="text-[#c27b57] leading-relaxed text-lg mb-8">
                        I teach you my method for managing my work without neglecting my home. This course is completely online, but you can see me through your computer, cell phone or tablet. You can connect from anywhere in the world.
                    </p>

                    <p className="text-[#c27b57] leading-relaxed text-lg mb-10">
                        Once you pay for your registration, you will receive an email from Hotmart with access to the recording of the master class.
                    </p>

                    <button className="bg-[#ff8e6e] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#ff7a56] transition">
                        I want to be Productive
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
