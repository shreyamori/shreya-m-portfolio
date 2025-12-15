import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BotanicalDivider from "@/components/BotanicalDivider";
import FloralAccent from "@/components/FloralAccent";
import { motion } from "framer-motion";
import { Coffee, Camera, Plane, BookOpen, Activity } from "lucide-react";

const interests = [
  {
    title: "Matcha & Cafes",
    description:
      "I love exploring different cafes, especially for a good matcha latte. There's something peaceful about finding the perfect spot to work or just take a break.",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&h=400&fit=crop",
    caption: "Always on the hunt for the perfect matcha",
  },
  {
    title: "Photography",
    description:
      "Capturing moments, whether it's a quiet morning or a new place. Photography helps me notice the details I might otherwise miss.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
    caption: "Finding beauty in everyday moments",
  },
  {
    title: "Travel",
    description:
      "Exploring new places, trying local food, and seeing how people live differently. Every trip teaches me something new.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    caption: "Collecting experiences, not just photos",
  },
  {
    title: "Pickleball",
    description:
      "A recent discovery that's become a favorite way to stay active and connect with friends. It's competitive but fun—the perfect balance.",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=600&h=400&fit=crop",
    caption: "Where competition meets community",
  },
  {
    title: "Reading",
    description:
      "Books are my escape and my education. I read everything from technical deep-dives to fiction that makes me think differently.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    caption: "Stories that stay with me long after",
  },
];

const FunPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative overflow-hidden">
        <FloralAccent position="top-right" size="lg" />
        <FloralAccent position="bottom-left" size="md" />

        <div className="container mx-auto px-6">
          <PageHeader
            label="Personal"
            title="Outside of Code"
            description="A few things that keep me curious, grounded, and inspired."
          />

          {/* Interests Grid */}
          <section className="max-w-5xl mx-auto pb-16">
            <div className="space-y-16">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Image - alternates left/right */}
                  <div
                    className={`relative overflow-hidden rounded-2xl ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <img
                        src={interest.image}
                        alt={interest.caption}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm text-white/90 font-medium drop-shadow-lg">
                        {interest.caption}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-4 ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-sage-light rounded-full">
                        <interest.icon size={20} className="text-forest" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-primary">
                        {interest.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <BotanicalDivider variant="leaves" className="pb-16" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FunPage;
