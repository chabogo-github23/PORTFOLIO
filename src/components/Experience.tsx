import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Intern developer",
    company: "Taquana Limited",
    location: "Westlands, Nairobi", 
    period: "April 2024 - December 2024",
    type: "experience",
    description: "Collaborated in developing a NGANYAAPP application which is a software solution that helps matato owners, and transport companies manage their business with ease.",
    technologies: ["Nuxt js", "vue.js",'node.js', "MongoDB"],
    logo: "🏢"
  },
  {
    title: "Bachelor of Science - Software Engineering",
    company: "University of Eastern Africa, Baraton",
    location: "Baraton, Nandi County, Kenya", 
    period: "August 2021 - August 2025",
    type: "education",
    description: "Software Engineering | Data Structure and Algorithms | Web Design | Web Development | Mobile Programming | Artificial Intelligence | IT Project Management | Cloud Computing | Object Oriented Programming | Database Management | Installation and Customization ",
    technologies: ["Software Engineering", "Data Structures", "Web Development", "Mobile Programming", "AI", "Cloud Computing"],
    achievement: "second class honors upper division",
    logo: "🎓"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                  <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="hover-glow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.logo}</span>
                        <Badge variant={item.type === 'education' ? 'secondary' : 'default'}>
                          {item.type === 'education' ? <GraduationCap className="w-3 h-3 mr-1" /> : <Building2 className="w-3 h-3 mr-1" />}
                          {item.type === 'education' ? 'Education' : 'Experience'}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-primary font-medium">{item.company}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground">
                          {item.type === 'education' ? 'Subjects:' : 'Technologies:'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}