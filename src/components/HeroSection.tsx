import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pt-24 pb-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-literata font-bold italic mb-2"
              variants={childVariants}
            >
              Hi, I'm {personalInfo.name}{" "}
              <span className="inline-block animate-pulse">✨</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground font-literata mb-6"
              variants={childVariants}
            >
              Web Developer
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 flex justify-center"
            variants={childVariants}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile2.jpg"
                alt="Profile"
                className="w-[250px] md:w-[300px] rounded-full relative ring-2 ring-purple-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="hidden">
            <div className="text-muted-foreground pl-4 py-2 mb-4 relative font-literata">
              <div className="flex flex-col gap-2">
                <span>
                A creative web developer blending design and development to craft engaging digital experiences.
                I graduated with a BSc in Digital Design and Web Development from Solent University in 2022, where I was honoured with the British Computer Society award for Digital Development.
                </span>
              </div>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <div className="text-muted-foreground pl-4 py-2 mb-4 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold font-literata">
                  With a background in both design and code, I thrive in environments where creativity meets functionality.
                </span>
                <span>
                  I love collaborating with designers, strategists, and storytellers to bring ideas to life—whether it’s building a visually striking website, refining UX, or solving complex front-end challenges. 🚀
                </span>
              </div>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper>
          <div className="hidden">
            <div className="text-muted-foreground pl-4 py-2 mb-4 relative">
              <div className="flex flex-col gap-2">
                <span>
                  How did it all start?
                  When I was 11, I created a blog and wanted to give it a custom look. Armed with NotePad and a Paint-made layout, I wrote my first lines of HTML and CSS. It wasn’t perfect, but it worked—and I was hooked.
                  That same excitement still drives me today. Every project is a chance to learn, refine, and create something both beautiful and purposeful.
                  Outside of code, I’m a runner—training both my body and mind through movement, discipline, and focus.
                </span>
              </div>
            </div>
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
