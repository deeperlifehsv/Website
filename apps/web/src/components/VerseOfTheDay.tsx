'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BookOpen, RefreshCw } from 'lucide-react'

interface ScriptureVerse {
  id: string
  content: string
  reference: string
  copyright?: string
}

interface VerseOfTheDayProps {
  className?: string
  showRefreshButton?: boolean
}

export function VerseOfTheDay({ className = '', showRefreshButton = false }: VerseOfTheDayProps) {
  const [verse, setVerse] = useState<ScriptureVerse | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [imageAlt, setImageAlt] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchVerse = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/verse-of-the-day')
      
      if (!response.ok) {
        throw new Error('Failed to fetch verse')
      }
      
      const data = await response.json()
      setVerse(data.verse)
      setImageUrl(data.imageUrl || '/assets/church_scenes/worship.jpg')
      setImageAlt(data.imageAlt || 'Scripture background')
    } catch (err) {
      setError('Unable to load verse')
      console.error('Error fetching verse:', err)
      
      // Fallback verse and image
      setVerse({
        id: 'fallback',
        content: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
        reference: 'Romans 10:9-10'
      })
      setImageUrl('/assets/church_scenes/worship.jpg')
      setImageAlt('Scripture background')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchVerse()
  }, [])

  if (isLoading) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white min-h-[400px] ${className}`}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-8 md:p-12 text-center flex items-center justify-center min-h-[400px]">
          <div className="animate-pulse">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-white/60" />
            </div>
            <div className="h-4 bg-white/20 rounded mb-4"></div>
            <div className="h-4 bg-white/20 rounded mb-4 w-3/4 mx-auto"></div>
            <div className="h-4 bg-white/20 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!verse) {
    return null
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl text-white min-h-[500px] ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 flex items-center justify-center min-h-[500px]">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="h-8 w-8 text-white/80 mr-3" />
            <h3 className="text-lg font-semibold text-white/90 tracking-wider uppercase">
              Verse of the Day
            </h3>
            {showRefreshButton && (
              <button
                onClick={fetchVerse}
                className="ml-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Refresh verse"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Verse Content */}
          <blockquote className="text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 text-white drop-shadow-lg relative">
            <span className="text-4xl md:text-6xl font-serif text-white/90 leading-none">"</span>
            <span className="relative">{verse.content}</span>
            <span className="text-4xl md:text-6xl font-serif text-white/90 leading-none">"</span>
          </blockquote>

          {/* Reference */}
          <cite className="text-xl md:text-2xl font-semibold text-white/90 not-italic drop-shadow-md">
            {verse.reference}
          </cite>

          {/* Copyright if available */}
          {verse.copyright && (
            <p className="text-sm text-white/70 mt-6 opacity-75">
              {verse.copyright}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
