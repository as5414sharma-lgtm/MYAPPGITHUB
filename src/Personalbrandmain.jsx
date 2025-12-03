export default function Personalbrandmain() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                <div>
                    <p className="text-[#c27b57] leading-relaxed text-lg mb-8">
                        Building a good personal brand is one of the best ways to start a successful career. The creation of a personal brand is not only for those who seek to be independent: it is a matter that concerns all of us who want to have a good name in the workplace and professionally. 
                    </p>

                    <p className="text-[#c27b57] leading-relaxed text-lg mb-10">
                       In this course, we will look at how to create a personal brand from scratch. We will have space for questions and you will have a list of activities to do. Start building your brand today.  
                    </p>

                    <button className="bg-[#ff8e6e] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#ff7a56] transition">
                        I want to Create my Personal Brand
                    </button>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/img section/Personal.png"
                        alt="Course Intro"
                        className="rounded-lg w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
