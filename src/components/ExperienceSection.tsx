
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    company: "Verizon(Capstone)",
    position: "Software Developer Intern",
    duration: "Jan 2025 - Present",
    description: [
      "Developed a machine learning model using XGBoost and K-Means Clustering to analyze and predict patterns in Verizon Cloud Monitoring Platform (VCMP) data, achieving 85% accuracy in fault detection.",
      "Processed and analyzed large-scale log data (39M+ rows) using PySpark on a High-Performance Computing (HPC) cluster, transforming unstructured JSON logs into actionable insights.",
      "Optimized the data preprocessing pipeline to efficiently handle large-scale log data (50GB+), enabling structured analysis and reducing processing time.",
      "Built an interactive dashboard for real-time model execution, reducing manual troubleshooting time by 40% and enhancing system monitoring."
    ],
    skills: ["XGBoost", "K-Means", "PySpark", "HPC", "JSON", "Dashboard"],
  },
  {
    company: "Rovasys",
    position: "Software Engineer",
    duration: "Jun 2022 - Jul 2023",
    description: [
      "Developed and designed real time tracking and inventory features for a cloud based platform using the MERN stack, boosting scalability by 25% and increasing sales funnel by $1M.",
      "Utilized tools like JMeter and Postman to test API response times, verifying a 25% improvement in system throughput by comparing load testing results before and after migrating to the new MERN stack architecture.",
      "Collaborated with cross-functional teams in an agile environment to analyze requirements and drive design, development, testing, and deployment, ensuring timely delivery of the redesigned MERN stack application."
    ],
    skills: ["MERN", "JMeter", "Postman", "Agile"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 mx-auto bg-gray-900 rounded mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            My professional journey in the tech industry, where I've had the opportunity
            to work on diverse projects and collaborate with talented teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-12 ${
                index !== experiences.length - 1 ? "border-l-2 border-gray-200" : ""
              } animate-slide-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <Briefcase className="mr-2 w-5 h-5" />
                    {exp.position} @ {exp.company}
                  </h3>
                  <div className="mt-2 sm:mt-0 flex items-center text-gray-500">
                    <Calendar className="mr-1 w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
