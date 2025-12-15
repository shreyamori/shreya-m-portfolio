export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
  content?: string; // Optional full content for individual post pages
}

export const posts: Post[] = [
  {
    slug: "what-i-learned-building-real-products",
    title: "What I learned building real products as a student",
    excerpt:
      "The gap between classroom projects and production software is wider than you think. Here's what I learned shipping code that thousands of people actually use.",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    tags: ["Career", "Engineering"],
    featured: true,
    content: `Building software in the classroom is one thing. Building software that real people depend on every day? That's something else entirely.

When I started my internship at JPMorgan Chase, I thought I knew how to write good code. I'd built plenty of projects, aced my algorithms courses, and felt confident in my technical skills. But nothing prepared me for the reality of building production software.

**The first lesson: code is only half the battle.**

The AI tool I built cut branch action plan drafting time by 80%. That's a big number, but the real challenge wasn't the algorithm or the API integration. It was understanding how 4,500+ branches actually work, what branch managers need, and how to design something that fits into their existing workflow.

I spent more time talking to stakeholders than writing code. Twenty-five different people, each with their own perspective on what "better" meant. That's when I learned that the best technical solution is useless if nobody wants to use it.

**The second lesson: scale changes everything.**

In school, you build for one user: yourself. In production, you build for thousands. That linear regression model I built for Dandilyonn? It worked perfectly in testing. But when real students started using it, we discovered edge cases we never imagined.

The app won "Best Overall App" not because the code was perfect, but because we tested it with 25+ real users. We watched them struggle, asked questions, and iterated. That's how you build something people actually want.

**The third lesson: shipping matters more than perfection.**

At CAS, I rebuilt 80% of a critical web application. Not because the old code was bad, but because it couldn't scale. We moved to microservices, improved performance, and made it maintainable. But we didn't rewrite everything—we shipped what mattered.

The kiosk initiative I led? It's now used in 5+ global offices. Not because it's the most elegant solution, but because it solved a real problem and we got it into people's hands.

**What I'm taking forward:**

Building real products taught me that great software isn't about clever algorithms or perfect architecture. It's about understanding people, solving real problems, and shipping something that makes their lives better.

The classroom gave me the tools. Real products taught me how to use them.`,
  },
  {
    slug: "why-i-care-about-thoughtful-software",
    title: "Why I care about thoughtful, human-centered software",
    excerpt:
      "Software isn't just code—it's how people experience technology. Here's why I build with intention, not just features.",
    date: "Jan 8, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
    tags: ["Design", "Philosophy"],
    featured: true,
    content: `I didn't always think about software this way. Like most CS students, I started by solving problems. Write the algorithm, pass the tests, move on. But somewhere between building my first mobile app and watching real users interact with it, something shifted.

**Software touches people's lives.**

When I built Connexus—an AI-powered learning platform—I thought I was building a tool. But I was actually building an experience. The way a student discovers content, the way they navigate their learning path, the way they feel when they understand something new. That's not just functionality. That's human connection.

I watched students use the app and realized: every interaction matters. A confusing button isn't just bad UX—it's frustration. A thoughtful flow isn't just good design—it's respect for someone's time and attention.

**Thoughtful means considering the whole experience.**

At JPMorgan Chase, I built an AI tool that saves hours of work. But the real win wasn't the time saved—it was making something that felt natural to use. Branch managers don't want to learn new software. They want their work to be easier.

So I spent time understanding their workflow. I asked questions. I watched them work. And I built something that fit into their day, not something that demanded they change how they work.

**Human-centered means building for real people.**

When I led the CAS Tools kiosk initiative, I wasn't just building a feature. I was thinking about the employee who uses it at 8 AM, the one who's stressed, the one who just wants to get their task done quickly.

That's why employee engagement increased by 15%. Not because the technology was revolutionary, but because we thought about the human on the other side of the screen.

**This is why I care.**

Software isn't neutral. Every design decision, every feature, every interaction shapes how someone experiences technology. I want to build software that makes people's lives better, not just software that works.

That's the difference between code and craft. Between building features and building experiences. Between solving problems and serving people.

And that's why I'll keep building thoughtfully, one interaction at a time.`,
  },
];
