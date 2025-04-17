import { GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 mx-auto bg-gray-900 rounded mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
  👋 Hi, I’m Sathwik Rao Veldi — a passionate Software Engineer who loves turning ideas into impactful solutions through code, data, and cloud innovation.
  <br /><br />
  💻 I specialize in Java, Python, and JavaScript, and thrive on building full-stack applications that are scalable, efficient, and user-centric.
  <br /><br />
  
  {/* 🎓 Currently pursuing my Master’s in Computer Science at NJIT, I’m always eager to learn, collaborate, and take on exciting new challenges.
  <br /><br /> */}
  🤝 Let’s connect and build something extraordinary!
</p>

        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-medium">
                  Master of Science (MS) in Computer Science
                </h4>
                <span className="text-gray-600">Sep 2023 - May 2025</span>
              </div>
              <p className="text-gray-700">
                New Jersey Institute of Technology, Newark
              </p>
            </div>

            <div className="flex items-center mb-6">
              <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Courses</h3>
            </div>
            <p className="text-gray-600">
              Data Structures & Algorithms, AI, Big Data, Cloud Computing, Operating Systems,
              Databases, Networks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
