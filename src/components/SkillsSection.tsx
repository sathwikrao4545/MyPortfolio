
import { Code, Database, Server, Zap } from "lucide-react";

type SkillCategory = {
  name: string;
  skills: string[];
  icon: React.ReactNode;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: <Code className="w-6 h-6" />,
    skills: ["C/C++", "Go", "Java", "Python", "JavaScript", "TypeScript", "MySQL", "MongoDB", "PostgreSQL", "DynamoDB"],
  },
  {
    name: "Frameworks & Software",
    icon: <Zap className="w-6 h-6" />,
    skills: ["HTML", "Node.js", "React.js", "React Native", "Angular.js", "Next.js", "Vue.js", "Django", "GraphQL", "Flask", "REST"],
  },
  {
    name: "Big Data & Frameworks",
    icon: <Database className="w-6 h-6" />,
    skills: ["Spring Boot", "JPA", "Numpy", "Pandas", "SKLearn", "PySpark", "OpenCV", "PyTorch", "TensorFlow", "Redis", "Agile"],
  },
  {
    name: "Infrastructure & Tools",
    icon: <Server className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "HTTP", "TCP/IP", "Linux", "Bash", "JIRA", "jQuery", "Jest", "JSON"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 mx-auto bg-gray-900 rounded mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            A comprehensive list of technologies and tools I've worked with throughout my academic and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
