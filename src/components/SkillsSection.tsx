import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Design",
    skills: ["Git", "Figma", "Docker", "AWS", "Vercel"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-wide text-sm uppercase">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
              <h3 className="font-display text-xl font-semibold text-gold mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Decorative blob */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-forest-light/10 blob-shape blur-3xl" />
      </div>
    </section>
  );
};

export default SkillsSection;
