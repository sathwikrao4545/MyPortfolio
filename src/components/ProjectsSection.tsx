
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  points: string[];
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    title: "Q&A Chatbot",
    description: "AI-powered question answering system",
    points: [
      "Built a Q&A chatbot using LLM, integrated OpenAI GPT and HuggingFace Hub, optimized with Langchain, securely managed API keys with dotenv, and deployed on Streamlit Cloud."
    ],
    image: "/uploads/robot.jpg",
    tags: ["LLM", "OpenAI GPT", "HuggingFace Hub", "Langchain", "API keys", "Streamlit Cloud"],
    githubLink: "https://github.com/sathwikrao4545/Q-A-Chatbot-Using-LLM",
  },
  {
    title: "Crime Analysis Using Hadoop and MapReduce",
    description: "Distributed data processing for crime analytics",
    points: [
      "Built a distributed crime data pipeline with Hadoop MapReduce, analyzing 1.8GB+ datasets for crime trends and locations. Optimized performance, scaling from 4 to 7 VMs, reducing processing time by 30%."
    ],
    image: "uploads/hadoop.png",
    tags: ["Hadoop", "MapReduce", "Big Data", "Crime Analysis", "VMs"],
    githubLink: "https://github.com/sathwikrao4545",
  },
  {
    title: "E-Commerce DevOps Implementation",
    description: "Modern DevOps infrastructure for e-commerce",
    points: [
      "Implemented DevOps practices like containerization, orchestration, IaC, and CI/CD for a demo e-commerce project. Built an EKS cluster using Terraform and automated CI/CD for a Java microservice with GitHub Actions & Argo CD. Secured frontend exposure with Route 53 DNS integration."
    ],
    image: "uploads/devops.webp",
    tags: ["DevOps", "EKS", "Terraform", "CI/CD", "Java", "GitHub Actions", "Argo CD", "Route 53 DNS"],
    githubLink: "https://github.com/sathwikrao4545",
  },
  {
    title: "Restaurant Website",
    description: "Modern responsive restaurant website",
    points: [
      "Engineered a responsive website using Next.js, producing two detailed Figma prototypes and conducting A/B testing. Identified design disparities that enhanced user experience and engagement metrics by 25% through targeted UI optimizations. Integrated Google Analytics to analyze user behavior and track performance metrics."
    ],
    image: "/uploads/restaurant.avif",
    tags: ["Next.js", "Figma", "A/B testing", "UI optimizations", "Google Analytics"],
    // liveLink: "#",
    githubLink: "https://github.com/sathwikrao4545/IS601grp",
  },
  {
    title: "Personal Portfolio",
    description: "Web hosting and deployment solution",
    points: [
      "Implemented a robust web hosting solution with AWS S3, Route 53, ACM and CloudFront, leveraging GitHub Actions for automated deployments and efficient updates."
    ],
    image: "/uploads/portfolio.jpg",
    tags: ["AWS S3", "Route 53", "ACM", "CloudFront", "GitHub Actions"],
    // liveLink: "#",
    githubLink: "https://github.com/sathwikrao4545",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 mx-auto bg-gray-900 rounded mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            A selection of my recent projects showcasing my skills and experience in
            web development, AI, big data, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{project.description}</p>
                <ul className="list-disc pl-5 text-gray-600 mb-4 text-sm">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4 pt-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
