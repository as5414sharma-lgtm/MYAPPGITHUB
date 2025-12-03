import { useState } from "react";
export default function ContactSection() {
  return (
    <section className="w-full bg-[#faf6ec] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
        <form className="space-y-6">
          <div>
            <label className="block text-[#b97a55] font-medium mb-1">Name*</label>
            <input
              type="text"
              placeholder="What's your name?"
              className="w-full bg-white border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b97a55]"
            />
          </div>
          <div>
            <label className="block text-[#b97a55] font-medium mb-1">Last name</label>
            <input
              type="text"
              placeholder="What's your last name?"
              className="w-full bg-white border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b97a55]"
            />
          </div>
          <div>
            <label className="block text-[#b97a55] font-medium mb-1">Your email*</label>
            <input
              type="email"
              placeholder="Write your email address here"
              className="w-full bg-white border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b97a55]"
            />
          </div>
          <div>
            <label className="block text-[#b97a55] font-medium mb-1">Your message*</label>
            <textarea
              placeholder="Leave your message here :)"
              rows={5}
              className="w-full bg-white border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#b97a55]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#ff8b6a] text-white font-semibold px-10 py-3 rounded-full hover:bg-[#ff7a55] duration-200"
          >
            SEND
          </button>
        </form>
        <div className="text-[#b97a55] max-w-md">
          <h2 className="text-4xl font-serif mb-6">Let's talk</h2>
          <p className="leading-7 mb-6 text-gray-700">
            Listening to your feedback and reading your comments makes me very happy.
            Contact me if you have any questions, comments, information, or to request a
            quote. I will get back to you shortly.
          </p>
          <p className="leading-7 mb-6 text-gray-700">
            Remember that you can also follow me on my social networks or write to my email:
            <br />
            <span className="italic">hola@tatiuribe.com</span>
          </p>
          <div className="flex items-center space-x-6 text-2xl text-[#b97a55]">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
