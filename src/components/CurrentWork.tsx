import { motion } from "framer-motion";
import { Code, Smartphone, GraduationCap, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const currentProjects = [
  {
    icon: Smartphone,
    title: "WAFUNI-NATION",
    company: "Personal",
    description: "building a musicial connecting system that will enable event organizers to find musicians based on their location and skills.",
    technologies: ["Django templatess", "postgresql", "django", "python", "bootstrap CSS", "Mpesa-daraja API", "Git/GitHub"],
    status: "In Progress",
    progress: 95
  },
  {
    icon: Code,
    title: "Portfolio Website",
    company: "Personal Project",
    description: "Updating my portfolio with new projects and enhanced features.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "Ongoing",
    progress: 90
  }
];

export function CurrentWork() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I'm <span className="gradient-text">Working On</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Current projects that keep me busy and building my experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover-glow h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <Badge 
                      variant={project.status === "In Progress" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-primary font-medium text-sm">{project.company}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium">Progress</span>
                      <span className="text-xs text-muted-foreground">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold">Continous Learning</h3>
            <p className="text-muted-foreground">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently exploring AI/ML integration, cloud computing, and advanced mobile development techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}