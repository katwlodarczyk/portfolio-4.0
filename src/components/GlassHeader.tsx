import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="{theme === 'light' ? 'text-[#403E4E]' : 'text-foreground' }" width="90" height="40" viewBox="0 0 150 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4995 53.8206H13.2853V0.159687H15.4995V53.8206ZM11.0711 53.8206H8.85686V0.159687H11.0711V53.8206ZM6.64265 53.8206H4.42843V0.159687H6.64265V53.8206ZM2.21422 53.8206H0V0.159687H2.21422V53.8206ZM31.6756 26.9901L44.6841 0.159687H47.1443L34.1358 26.9901L47.1443 53.8206H44.6841L31.6756 26.9901ZM26.7244 26.9901L39.7329 0.159687H42.1931L29.1846 26.9901L42.1931 53.8206H39.7329L26.7244 26.9901ZM21.7731 26.9901L34.7816 0.159687H37.2419L24.2334 26.9901L37.2419 53.8206H34.7816L21.7731 26.9901ZM16.7911 26.9901L29.8304 0.159687H32.2906L19.2514 26.9901L32.2906 53.8206H29.8304L16.7911 26.9901Z" fill="currentColor"/>
            <path d="M65.9959 37.327L64.9503 41.9284L54.4328 0.159687H56.7085L65.9959 37.327ZM68.3024 28.3511L67.1646 32.8229L59.015 0.159687H61.26L68.3024 28.3511ZM70.6089 19.0512L69.4403 23.5877L63.5664 0.159687H65.8729L70.6089 19.0512ZM79.3735 53.8206H77.067L90.5368 0.224494L90.5061 0.159687H92.8433V0.224494L98.8401 21.9999L104.345 0.159687H106.651L93.1508 53.8206H90.8444L84.8168 32.0776L79.3735 53.8206ZM74.7605 53.8206H72.4848L85.9546 0.159687H88.2304L74.7605 53.8206ZM70.1783 53.8206H67.9026L81.4032 0.159687H83.6482L70.1783 53.8206ZM106.928 53.8206H104.622L118.092 0.159687H120.398L106.928 53.8206ZM102.315 53.8206H100.04L113.509 0.159687H115.785L102.315 53.8206ZM97.733 53.8206H95.4573L108.958 0.159687H111.203L97.733 53.8206ZM64.4583 49.2192L76.7902 0.159687H79.0967L65.5961 53.8206H63.2897L49.8199 0.159687H52.1263L64.4583 49.2192ZM85.9854 27.5086L91.9515 49.4137L93.1201 44.7799L87.1232 22.9397L85.9854 27.5086ZM88.2611 18.3707L94.2579 40.211L95.4266 35.642L89.4297 13.7693L88.2611 18.3707ZM90.5368 9.2976L96.5644 31.1378L97.7023 26.5365L91.7362 4.63143L90.5368 9.2976Z" fill="currentColor"/>
            <path d="M29.8277 0.132711L37.2596 0.132715L24.2223 27.0098L16.7904 27.0098L29.8277 0.132711Z" fill="currentColor"/>
            <path d="M37.2596 53.887L29.8277 53.887L17.5917 28.7137L21.9417 22.3644L37.2596 53.887Z" fill="currentColor"/>
            <path d="M136.963 0.136122L129.531 0.136125L142.568 27.0133L150 27.0133L136.963 0.136122Z" fill="currentColor"/>
            <path d="M129.531 53.8904L136.963 53.8904L149.952 27.0098L144.849 22.3679L129.531 53.8904Z" fill="currentColor"/>
            <path d="M113.468 0H120.459L106.918 53.8206H100.053L113.468 0Z" fill="currentColor"/>
          </svg>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["experience", "skills", "projects", "awards", "education"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item === "experience" && "💼 "}
                {item === "skills" && "🛠️ "}
                {item === "projects" && "🚀 "}
                {item === "awards" && "🏆 "}
                {item === "education" && "🎓 "}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            )
          )}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {["experience", "skills", "projects", "awards", "education"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {item === "experience" && "💼 "}
                    {item === "skills" && "🛠️ "}
                    {item === "projects" && "🚀 "}
                    {item === "awards" && "🏆 "}
                    {item === "education" && "🎓 "}
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
