import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
  index: number;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  date,
  readTime,
  image,
  tags,
  featured = false,
  index,
}: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${featured ? "md:col-span-2" : ""}`}
    >
      <Link to={`/blog/${slug}`} className="block">
        <div className={`bg-card rounded-lg overflow-hidden border border-border/50 hover-lift ${
          featured ? "md:flex" : ""
        }`}>
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? "md:w-1/2" : "aspect-[16/10]"}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className={`p-8 ${featured ? "md:w-1/2 md:p-10 md:flex md:flex-col md:justify-center" : ""}`}>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-sage-light text-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className={`font-display font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}>
              {title}
            </h3>

            <p className={`text-muted-foreground mb-4 ${featured ? "text-base" : "text-sm line-clamp-2"}`}>
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {readTime}
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                Read more
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
