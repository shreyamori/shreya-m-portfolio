import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";
import { posts } from "@/data/posts";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative overflow-hidden">
        <FloralAccent position="top-left" size="md" />
        <FloralAccent position="bottom-right" size="lg" />

        <div className="container mx-auto px-6">
          <PageHeader
            label="Writing"
            title="Blog"
            description="Thoughts on technology, design, career, and the journey of becoming a better engineer."
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 pb-16">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} {...post} index={index} />
            ))}
          </div>

          <BotanicalDivider variant="branch" className="pb-16" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
