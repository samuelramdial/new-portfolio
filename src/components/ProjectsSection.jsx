import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Valorant Tracker",
    description:
      "Valorant Tracker is a web app that analyzes player performance using data from Riot Games and Henrik's Valorant APIs, providing clear insights through intuitive visuals.",
    image: "/projects/project1.jpg",
    tags: ["React", "Firebase", "Riot API & Henrik's Valorant API"],
    demoUrl: "/projects/User_Manual.pdf",
  },
  {
    id: 2,
    title: "Wall Street Careers Database Design",
    description:
      "Designed a normalized relational database (up to BCNF) with SQL schemas, views, and stored procedures. Implemented data integrity, indexing, security, backup strategies, and query optimization for efficient access.",
    image: "/projects/project2.jpg",
    tags: ["MySQL"],
    demoUrl: "/projects/database_project.pdf",
  },
  {
    id: 3,
    title: "Travel Nano",
    description:
      "Travel Nano is a blogging platform where travelers share experiences, connect, and use tools like a currency converter for a seamless journey.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Psycopyg2"],
    githubUrl: "https://github.com/samuelramdial/travel-nano",
  },
  {
    id: 4,
    title: "Bearcade Haven",
    description:
      "BearCade Haven is a Node.js web app for buying, selling, and managing video games, featuring CRUD, search, image uploads, validation, and secure authentication for users and admins.",
    image: "/projects/project4.jpg",
    tags: ["JavaScript", "CSS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/samuelramdial/video-game-web-app",
  },
  {
    id: 5,
    title: "Diabetes Tracker: Personal Health Monitoring Tool",
    description:
      "A simple health tracking app for individuals managing diabetes. Users can log blood sugar, insulin doses, and meals (with carbs), while viewing daily averages and total carb intake.",
    disclaimer:
      "Disclaimer: This tool is for personal tracking only and not a substitute for medical advice. Please consult a licensed healthcare provider for all health-related decisions.",
    image: "/projects/project5.jpeg",
    tags: ["Java"],
    githubUrl: "https://github.com/samuelramdial/diabetes-managment-system",
  },
  {
    id: 6,
    title: "Tunestore Security Assessment",
    description:
      "Audited a vulnerable web app to identify issues like XSS, CSRF, broken access control, and clickjacking. Developed a working clickjacking exploit and proposed mitigation strategies for all findings.",
    image: "/projects/project6.png",
    tags: ["Cybersecurity", "Penetration Testing", "XSS", "CSRF", "Clickjacking"],
    demoUrl: "/projects/tunestore.pdf",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a look at some of the projects I've worked on. Each one reflects
          a focus on thoughtful design, practical functionality, and clean
          implementation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} Demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className ="text-center mt-12">
            <a className = "cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/samuelramdial" target="_blank" >Check My Github <ArrowRight size ={16}/></a>
        </div>
      </div>
    </section>
  );
};
