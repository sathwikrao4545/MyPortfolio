import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [greeting, setGreeting] = useState("");

  // Rotating job titles
  const titles = ["Software Engineer", "Full-Stack Developer", "AI Enthusiast", "Tech Innovator"];

  useEffect(() => {
    // Rotate titles every 3 seconds
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    // Set greeting based on the time of day
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning!");
    } else if (hour < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 animate-scale-in">
            <img
              src="/uploads/pic.jpg"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Greeting */}
          <p className="text-lg text-gray-600 mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {greeting}
          </p>

          {/* Name */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Sathwik Rao Veldi
          </h1>

          {/* Rotating Job Titles */}
          <h2
            className="text-xl md:text-2xl font-medium text-gray-600 mb-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {titles[currentTitleIndex]}
          </h2>

          {/* Description */}
          <p
            className="max-w-2xl text-gray-600 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Passionate about building scalable, user-centric applications and integrating AI to solve real-world problems. Let's create something amazing together!
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline" className="transition-all duration-300 hover:scale-105">
              <a href="#experience">Work Experience</a>
            </Button>
          </div>

          {/* Scroll Down Arrow */}
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;