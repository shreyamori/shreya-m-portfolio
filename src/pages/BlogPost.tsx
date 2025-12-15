import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative overflow-hidden">
        <FloralAccent position="top-left" size="md" />
        <FloralAccent position="bottom-right" size="lg" />

        <article className="container mx-auto px-6 py-16">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-sage-light text-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>

            {/* Excerpt/Intro */}
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {post.excerpt}
            </p>
          </motion.header>

          <BotanicalDivider variant="minimal" className="my-12" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-foreground leading-relaxed text-base md:text-lg">
              {post.content ? (
                <div className="space-y-6">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    // Handle bold text
                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={index} className="mb-6 text-muted-foreground">
                        {parts.map((part, partIndex) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                              <strong
                                key={partIndex}
                                className="font-semibold text-foreground"
                              >
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return <span key={partIndex}>{part}</span>;
                        })}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p className="text-muted-foreground italic">
                  Content coming soon...
                </p>
              )}
            </div>
          </motion.div>

          <BotanicalDivider variant="branch" className="my-16" />

          {/* Back to blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-forest-light transition-colors"
            >
              <ArrowLeft size={18} />
              Back to all posts
            </Link>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
