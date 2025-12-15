import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, Link } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold font-literata mb-8 text-center md:text-left">
            🚀 
            <span className="italic ml-2">
              Personal Projects
            </span>
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col ">
                <CardHeader className="">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-fit mb-4 rounded-lg shadow-sm"
                  />
                  <CardTitle className="font-literata text-center md:text-left transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow ">
                  <ul className="list-disc ml-4 space-y-1 text-sm transition-all duration-300">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className={`flex ${project.website ? 'justify-between' : 'justify-end'} items-center border-t border-border/30`}>
                  {project.website && (
                    <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                        Visit Website
                      </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                    View on GitHub
                  </motion.a>
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
