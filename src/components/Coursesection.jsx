import React from "react";
const courses = [
  {
    title: "Instagram Course",
    img:"/img/inst.png",  
    btn: "I'M INTERESTED",
  },
  {
    title: "Personal Branding Course",
    img:"/img/Brand.png",
    btn:"I WANT TO BUILD A BRAND",
  },
  {
    title: "Productivity Course",
    img:"/img/Productive.png",
    btn:"I WANT TO BE PRODUCTIVE",
  },
];

export default function CoursesSection() {
  return (
    <div className="w-full py-16 bg-[#f9f4f1]">
      <h2 className="text-center text-4xl font-serif text-[#c28a67] mb-12">
        Courses and workshops
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6">

        {courses.map((course, index) => (
          <div key={index} className="flex flex-col items-center text-center">
    
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-72 object-cover rounded-xl shadow"
            />
            <h3 className="text-2xl font-serif mt-6 text-[#c28a67]">
              {course.title}
            </h3>
            <button className="mt-4 bg-[#f28f79] text-white px-6 py-3 rounded-full tracking-wide hover:bg-[#e57d66] transition">
              {course.btn}
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
