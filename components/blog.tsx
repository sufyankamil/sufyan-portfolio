"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { BookOpen, Code2, Cpu, ExternalLink, Lightbulb } from "lucide-react";
import Link from "next/link";
const snippets = [
  {
    title: "Optimizing Flutter Performance",
    excerpt: "How to reduce widget rebuilds and optimize for 60FPS using const constructors and RepaintBoundary.",
    category: "Flutter",
    date: "March 2024",
    url: "https://flutter-mastery.hashnode.dev/beyond-the-ui-mastering-flutter-performance-at-60fps",
    icon: <Cpu className="text-primary" size={20} />,
    color: "bg-blue-500/10 text-blue-500",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Performance in Flutter is heavily dependent on how efficiently you manage the widget tree. In high-stakes production apps, even a minor drop in frame rate can impact user retention.</p>
        <div className="bg-muted p-4 rounded-lg font-mono text-xs">
          {`// Use RepaintBoundary for heavy widgets
RepaintBoundary(
  child: MyComplexWidget(),
)`}
        </div>
        <p>By isolating complex paint operations, you ensure that Flutter only redraws what is absolutely necessary, maintaining a crisp 60FPS experience.</p>
      </div>
    )
  },
  {
    title: "Clean Architecture in Dart",
    excerpt: "Implementing Domain-Driven Design (DDD) for scalable mobile applications with BLoC state management.",
    category: "Architecture",
    date: "February 2024",
    url: "https://flutter-mastery.hashnode.dev/scalable-flutter-why-clean-architecture-is-a-must-for-professional-apps",
    icon: <Code2 className="text-primary" size={20} />,
    color: "bg-purple-500/10 text-purple-500",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Scalable apps require a clear separation of concerns. Clean Architecture (Proposed by Uncle Bob) adapted for Flutter allows for independent testing and easier maintenance.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data Layer</strong>: Repositories and Data Sources.</li>
          <li><strong>Domain Layer</strong>: Entities and Use Cases (The Heart).</li>
          <li><strong>Presentation Layer</strong>: BLoCs and UI Widgets.</li>
        </ul>
        <p>This structure ensures that changes in the UI (like switching from Material to Cupertino) don't break your business logic.</p>
      </div>
    )
  },
  {
    title: "Supabase & Edge Functions",
    excerpt: "Leveraging serverless functions for real-time mobile backend logic without maintaining a server.",
    category: "Backend",
    date: "January 2024",
    url: "https://flutter-mastery.hashnode.dev/the-modern-mobile-backend-scaling-faster-with-supabase-and-edge-functions",
    icon: <Lightbulb className="text-primary" size={20} />,
    color: "bg-emerald-500/10 text-emerald-500",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Edge Functions allow you to run backend logic closer to your users. Combined with Supabase's real-time capabilities, it creates a powerful serverless ecosystem for mobile.</p>
        <p>Safe operations like payment processing or complex data validation should always be handled on the server (Edge) rather than the client to ensure security and data integrity.</p>
      </div>
    )
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-background border-t border-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Technical Insights
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Lessons <span className="text-primary">Learned</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sharing technical discoveries and architectural patterns from 
            building production-grade mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {snippets.map((snippet, index) => (
            <motion.div
              key={snippet.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${snippet.color}`}>
                        {snippet.icon}
                    </div>
                    <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-widest bg-muted/50">
                        {snippet.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {snippet.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {snippet.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-muted-foreground/60">{snippet.date}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-1 text-primary hover:underline group/link cursor-pointer bg-transparent border-none p-0 outline-none">
                            Read Snippet <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border-primary/20">
                        <DialogHeader>
                          <div className={`w-fit p-3 rounded-2xl mb-4 ${snippet.color}`}>
                            {snippet.icon}
                          </div>
                          <DialogTitle className="text-2xl font-bold mb-2">{snippet.title}</DialogTitle>
                          <Badge variant="outline" className="w-fit border-primary/30 text-primary mb-4">
                            {snippet.category}
                          </Badge>
                        </DialogHeader>
                        <div className="mt-4">
                          {snippet.content}
                          <div className="mt-8 pt-6 border-t border-primary/10">
                            <Link 
                                href={snippet.url} 
                                target="_blank"
                                className="inline-flex items-center gap-2 text-primary hover:underline font-bold"
                            >
                                Read Full Article on Hashnode <ExternalLink size={14} />
                            </Link>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center"
        >
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                <BookOpen size={16} /> 
                Looking for more? Check out my full blog on 
                <Link href="https://flutter-mastery.hashnode.dev/" target="_blank" className="text-primary font-bold hover:underline">Hashnode</Link>
            </p>
        </motion.div>
      </div>
    </section>
  );
}
