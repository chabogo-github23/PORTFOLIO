import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import wafungi from "@/assets/wafungi.jpg";
import mot from "@/assets/mot.jpg"

const projects = [
  {
    title: "MOTRAYLEV carhire servises",
    description: "Complete fullstack carhire management system that manages the booking are and renting of cars for a given period at a fee.",
    image: mot,
    technologies: ["Django templatess", "postgresql", "django", "python", "bootstrap CSS", "paystack API", "Git/GitHub"],
    demoUrl: "https://MOTRAYLEV.onrender.com/",
    skills: ["Problem Solving", "Communication", "realtime notification"]
  },
    {
    title: "WAFUNGI-NATION",
    description: "Complete full-stack musician location and tracking system commonly known as 'wafungi-nation'.",
    image:wafungi,
    technologies: ["Django templatess", "postgresql", "django", "python", "bootstrap CSS", "Mpesa-daraja API", "Git/GitHub"],
    demoUrl: "",
    skills: ["Problem Solving", "Communication", "realtime notification"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-card border shadow-card hover:shadow-elegant transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    asChild
                    className="bg-primary/90 hover:bg-primary text-primary-foreground"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href="https://github.com/chabogo-github23" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}