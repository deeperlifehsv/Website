'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
  cta?: {
    text: string
    href: string
    secondary?: boolean
  }
}

const defaultSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/assets/church_scenes/worship.jpg',
    title: 'Welcome to Deeper Life Bible Church',
    subtitle: 'Experience the transforming power of God\'s love in a community that cares',
    cta: {
      text: 'Join Us Sunday',
      href: '/contact',
    }
  },
  {
    id: 2,
    image: '/assets/church_scenes/worship_session.jpg',
    title: 'Growing in Faith Together',
    subtitle: 'Discover your purpose through biblical teaching and authentic fellowship',
    cta: {
      text: 'Learn More',
      href: '/about',
      secondary: true
    }
  },
  {
    id: 3,
    image: '/assets/church_scenes/Backview.jpg',
    title: 'A Place to Belong',
    subtitle: 'Find your spiritual home in Huntsville, Alabama',
    cta: {
      text: 'Connect With Us',
      href: '/contact',
    }
  }
]

interface HeroSliderProps {
  slides?: HeroSlide[]
  autoplay?: boolean
  autoplayDelay?: number
}

export function HeroSlider({ 
  slides = defaultSlides, 
  autoplay = true, 
  autoplayDelay = 5000 
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [isPlaying, autoplayDelay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            {slides[currentSlide].cta && (
              <div className="pt-8">
                <a
                  href={slides[currentSlide].cta!.href}
                  className={`inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    slides[currentSlide].cta!.secondary
                      ? 'bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm'
                      : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {slides[currentSlide].cta!.text}
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 transition-transform group-hover:scale-110" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 transition-transform group-hover:scale-110" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? (
          <div className="h-6 w-6 flex items-center justify-center">
            <div className="w-1.5 h-4 bg-white rounded-sm mr-1"></div>
            <div className="w-1.5 h-4 bg-white rounded-sm"></div>
          </div>
        ) : (
          <Play className="h-6 w-6 ml-0.5" />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
