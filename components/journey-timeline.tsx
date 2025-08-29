"use client"

import { motion } from "framer-motion"

type TimelineEvent = {
  year: string
  title: string
  description: string
  isHighlighted?: boolean
}

export default function JourneyTimeline() {
  const events: TimelineEvent[] = [
    {
      year: "2010",
      title: "First Steps in Tech",
      description: "Introduced to computers and the internet in grade 5 at ICS Addis (International Community School of Addis Ababa). Started exploring IT as an extracurricular activity with Mr. John Iglar, sparking a lifelong passion for technology.",
      isHighlighted: true
    },
    {
      year: "2013",
      title: "Web Development Discovery",
      description: "Discovered HTML, CSS, and JavaScript, which became a turning point. Spent countless hours in the library diving deep into web development, often skipping other classes to pursue this new passion.",
      isHighlighted: true
    },
    {
      year: "2015",
      title: "Expanding Horizons in Madagascar",
      description: "Moved to Madagascar where I had more freedom to explore programming. Delved into C# and Java, expanding my technical skills and understanding of different programming paradigms.",
    },
    {
      year: "2016",
      title: "Academic Challenges & Mentorship",
      description: "Returned to South Africa and took IT as a class. Despite the challenges of learning Delphi, was fortunate to be mentored by the late Mr. Gert Bossman, who provided invaluable guidance and support during difficult times.",
    },
    {
      year: "2018",
      title: "University & Life-Changing Mentorship",
      description: "Met Andries Johan Taljaard at university, who became both a mentor and close friend. His dedication to my success and belief in my abilities helped shape my development journey and personal growth.",
      isHighlighted: true
    },
    {
      year: "Present",
      title: "Lifelong Learning Journey",
      description: "Continues to learn and explore new technologies with the same passion that started in that school library. The journey has been shaped by incredible mentors and personal perseverance, proving that with the right support and determination, any challenge can be overcome.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 font-sans">
        My Development Journey
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/20" />
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16"
            >
              {/* Year */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-mono text-sm font-bold">
                {event.year}
              </div>
              
              {/* Content */}
              <div className={`p-6 rounded-lg border ${
                event.isHighlighted 
                  ? 'bg-foreground/5 border-foreground/20 shadow-lg' 
                  : 'border-foreground/10'
              }`}>
                <h3 className={`text-xl font-bold mb-2 font-sans ${
                  event.isHighlighted ? 'text-foreground' : 'text-foreground/90'
                }`}>
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
