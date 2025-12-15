import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Coffee, Camera, Music, Plane, BookOpen, Gamepad2, Leaf, Heart } from "lucide-react";

const interests = [
  {
    title: "Coffee & Matcha",
    description: "Always on the hunt for the perfect matcha latte. My current favorite: Andytown Coffee in SF.",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop",
  },
  {
    title: "Travel Photography",
    description: "Capturing moments from my adventures. Japan, Portugal, and Iceland are top of my list.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
  },
  {
    title: "Vinyl & Music",
    description: "Building a small vinyl collection. Currently spinning: Japanese City Pop and 70s soul.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=400&h=300&fit=crop",
  },
  {
    title: "Houseplants",
    description: "17 plants and counting. My monstera and fiddle leaf fig are my pride and joy.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop",
  },
];

const favorites = [
  {
    category: "Currently Reading",
    items: ["'Tomorrow and Tomorrow and Tomorrow' by Gabrielle Zevin", "'The Design of Everyday Things' by Don Norman", "'Pachinko' by Min Jin Lee"],
    icon: BookOpen,
  },
  {
    category: "Favorite Games",
    items: ["Stardew Valley", "Hollow Knight", "Zelda: Tears of the Kingdom"],
    icon: Gamepad2,
  },
  {
    category: "Dream Destinations",
    items: ["New Zealand", "Patagonia", "Norwegian Fjords"],
    icon: Plane,
  },
  {
    category: "Simple Joys",
    items: ["Farmers markets on Sunday mornings", "Rainy days with a good book", "Cooking for friends"],
    icon: Heart,
  },
];

const photos = [
  "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516685018646-549198525c1b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1474693220100-7adba88a62cc?w=400&h=400&fit=crop",
];

const FunPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6">
        <PageHeader
          label="Personal"
          title="Fun Stuff"
          description="The hobbies, interests, and little things that make life colorful outside of code."
        />

        {/* Interest Cards */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2 bg-accent rounded-full">
                      <interest.icon size={18} className="text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {interest.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Favorites Grid */}
        <section className="max-w-5xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-primary mb-8 text-center"
          >
            A Few of My Favorite Things
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((fav, index) => (
              <motion.div
                key={fav.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center mb-4">
                  <fav.icon size={18} className="text-forest" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-3">
                  {fav.category}
                </h3>
                <ul className="space-y-2">
                  {fav.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Photo Grid */}
        <section className="max-w-5xl mx-auto pb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-primary mb-8 text-center"
          >
            Through My Lens
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FunPage;
