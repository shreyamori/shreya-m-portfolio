import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";

const posts = [
  {
    slug: "design-systems-journey",
    title: "My Journey Building Design Systems",
    excerpt: "What I learned from creating component libraries that actually get used. Spoiler: it's mostly about documentation and developer experience.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    tags: ["Design", "Engineering"],
    featured: true,
  },
  {
    slug: "internship-lessons",
    title: "5 Things I Wish I Knew Before My First Tech Internship",
    excerpt: "Practical advice for CS students about to enter the industry. From imposter syndrome to asking good questions.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=375&fit=crop",
    tags: ["Career", "Advice"],
  },
  {
    slug: "accessible-web-design",
    title: "Why Accessibility Should Be Your Default",
    excerpt: "Making the web usable for everyone isn't just the right thing to do—it makes you a better developer.",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=375&fit=crop",
    tags: ["Accessibility", "Design"],
  },
  {
    slug: "side-projects-matter",
    title: "Why Your Side Projects Don't Need to Be Impressive",
    excerpt: "The pressure to build portfolio-worthy projects is real. Here's why building for fun still matters.",
    date: "Oct 30, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=375&fit=crop",
    tags: ["Productivity", "Mindset"],
  },
  {
    slug: "hackathon-survival-guide",
    title: "A Realistic Hackathon Survival Guide",
    excerpt: "After 10+ hackathons, here's what actually helps you build something great in 24-48 hours.",
    date: "Oct 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=375&fit=crop",
    tags: ["Hackathons", "Advice"],
  },
  {
    slug: "learning-in-public",
    title: "Learning in Public Changed My Career",
    excerpt: "How sharing my journey, mistakes included, opened doors I never expected.",
    date: "Sep 25, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=375&fit=crop",
    tags: ["Career", "Growth"],
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-warm">
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

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 pb-12">
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
