
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
      " Built scalable PySpark pipelines to preprocess and transform 1TB+ of unstructured, noisy Telemetry JSON logs daily, enabling efficient downstream analytics and ML workflows.",
      " Deployed SLURM-based scheduling in HPC environments to automate and parallelize ETL jobs for backfilling and data ingestion, significantly improving resource utilization and job throughput by 70%.",
      "Achieved a 40% reduction in data processing time and a 95% data quality score by implementing feature engineering, filtering, and validation checks in distributed data pipelines.",
      "Engineered log analysis pipelines using TF-IDF, SQL window functions, and Sequential pattern mining(PrefixSpan) to identify recurring failure patterns, reducing downtime by 40% and saving in operational costs."
    ],
    // skills: ["XGBoost", "K-Means", "PySpark", "HPC", "JSON", "Dashboard"],
  },
  {
    company: "Rovasys",
    position: "Software Engineer",
    duration: "Jun 2022 - Jul 2023",
    description: [
      "Developed a Python FastAPI /ingest/ocr endpoint with Tesseract OCR and OpenCV, processing 5,000 images/day at 700 ms avg. latency and achieved 98% recognition accuracy and cut manual entry errors by 90%.",
      "Designed partitioned PostgreSQL time-series schema handling 1M+ records/month with 200 ms queries (70% faster).",
      "Developed real-time Power BI dashboards to give warehouses clear visibility into inbound/outbound traffic flows, dock utilization, and dwell-time hotspots, enabling proactive scheduling and resource allocation that reduced average truck dwell time by 15%."
      "Wrote a pytest suite (unit & integration tests) with 95% coverage, integrated into our CI/CD pipeline, slashing OCR-related bugs by 60% and ensuring data integrity."
    ],
    // skills: ["MERN", "JMeter", "Postman", "Agile"],
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
