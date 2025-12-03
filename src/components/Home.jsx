import { useState } from "react";
import Hero from "./Hero";
import LearnSection from "./Learnsection";
import CoursesSection from "./Coursesection";
import InstagramSection from "./Instagramsection";
import YouTubePromo from "./YoutubePromo";
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>  
      <Hero />
       <LearnSection />
       <CoursesSection/>
       <InstagramSection/>
       <YouTubePromo/>
     
      </>

  );
}

export default Home;