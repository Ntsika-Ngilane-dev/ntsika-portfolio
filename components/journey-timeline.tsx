"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

type TimelineEvent = {
  year: string
  title: string
  description: string
  isHighlighted?: boolean
  icon: string
  color: string
}

export default function JourneyTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const events: TimelineEvent[] = [
    {
      year: "2010",
      title: "The Beginning in Ethiopia",
      description: "Started my development journey in grade 5 at ICS Addis. Explored IT as an extracurricular activity with Mr. John Iglar, which sparked my passion for technology.",
      isHighlighted: true,
      icon: "🎒",
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2013",
      title: "Web Development Awakening",
      description: "Discovered HTML, CSS, and JavaScript. Spent countless hours in the library diving into web development, often skipping other classes to pursue this new passion.",
      isHighlighted: true,
      icon: "💻",
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2015",
      title: "New Horizons in Madagascar",
      description: "Moved to Madagascar where I had more freedom to explore programming. Delved into C# and Java, expanding my technical skills and understanding of different programming paradigms.",
      icon: "🌍",
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2016",
      title: "Academic Challenges & Mentorship",
      description: "Returned to South Africa and took IT as a class. Despite the challenges of learning Delphi, was fortunate to be mentored by the late Mr. Gert Bossman, who provided invaluable guidance and support during difficult times.",
      isHighlighted: true,
      icon: "👨‍🏫",
      color: "from-red-500 to-pink-500"
    },
    {
      year: "2018",
      title: "University & Life-Changing Mentorship",
      description: "Met Andries Johan Taljaard at university, who became both a mentor and close friend. His dedication to my success and belief in my abilities helped shape my development journey and personal growth.",
      isHighlighted: true,
      icon: "🎓",
      color: "from-purple-600 to-indigo-600"
    },
    {
      year: "Present",
      title: "Lifelong Learning Journey",
      description: "Continuing to learn and explore new technologies with the same passion that started in that school library. The journey has been shaped by incredible mentors and personal perseverance, proving that with the right support and determination, any challenge can be overcome.",
      icon: "🚀",
      color: "from-amber-500 to-orange-500"
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={container}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-sans"
          variants={item}
        >
          My Development Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"
            initial={{ scaleY: 0 }}
            animate={{ 
              scaleY: inView ? 1 : 0,
              transition: { 
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
          />
          
          <div className="space-y-12">
            <AnimatePresence>
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative pl-16 group"
                >
                  {/* Year & Icon */}
                  <motion.div 
                    className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10 ${
                      event.isHighlighted 
                        ? 'bg-gradient-to-br p-1' 
                        : 'bg-background border-2 border-foreground/10'
                    } ${event.color}`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { 
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 300
                      } 
                    }}
                  >
                    <div className="bg-background w-full h-full rounded-full flex items-center justify-center">
                      {event.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    className={`p-6 rounded-xl border ${
                      event.isHighlighted 
                        ? 'bg-gradient-to-br from-background to-background/80 border-foreground/10 shadow-xl' 
                        : 'bg-background/50 border-foreground/5'
                    } backdrop-blur-sm`}
                    whileHover={{ 
                      x: 10,
                      transition: { 
                        duration: 0.3,
                        ease: "easeOut"
                      } 
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-foreground/5 text-foreground/80 text-sm font-mono rounded-full">
                        {event.year}
                      </span>
                      {event.isHighlighted && (
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-background text-xs font-bold rounded-full">
                          Key Moment
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 font-sans ${
                      event.isHighlighted ? 'text-foreground' : 'text-foreground/90'
                    }`}>
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
