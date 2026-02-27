"use client";

import React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroSlides = [
  {
    image: "/BeachSunset.webp",
    tagline: "Malibu Coast",
  },
  {
    image: "/Sarah.webp",
    tagline: "Sarah Conner",
  },
  {
    image: "/SarahandHusband2.webp",
    tagline: "Family",
  },
  {
    image: "/DesertPoolside.webp",
    tagline: "Desert Living",
  },
  {
    image: "/SarahandPate2.webp",
    tagline: "Sarah and Pate",
  },
];

const locations = [
  "Malibu",
  "Beverly Hills",
  "Hollywood Hills",
  "Palm Springs",
  "Palm Desert",
  "Rancho Mirage",
  "La Quinta",
  "Pacific Palisades",
];

interface HeroSliderProps {
  children: React.ReactNode;
}

export function HeroSlider({ children }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setCurrentLocation((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setCurrentLocation((prev) => (prev + 1) % locations.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
    setCurrentLocation(
      (prev) => (prev - 1 + locations.length) % locations.length,
    );
  };

  return (
    <section className="relative h-screen ">
      {/* Image Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.tagline}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/60" />
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button> */}

      {/* Center Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-tight">
          Ask Sarah Conner
        </h1>

        <p className="mt-6 text-base md:text-lg tracking-[0.15em] uppercase text-white/70 font-medium">
          From Malibu’s Coastal Charm to the Serenity of the Desert
        </p>

        {/* Animated Location List */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:gap-x-3 max-w-2xl">
          {locations.map((location, index) => (
            <span
              key={location}
              className="inline-flex flex-col items-center w-max"
            >
              <span
                className={`text-sm md:text-base tracking-wide transition-all duration-500 ${
                  index === currentLocation
                    ? "text-white font-medium scale-110"
                    : "text-white/40"
                }`}
              >
                {location}
                {index < locations.length - 1 && (
                  <span className="ml-2 md:ml-3 text-white/30">·</span>
                )}
              </span>

              {/* Red underline */}
              <span
                className={`block mt-2 h-0.5 bg-red-500 rounded-full w-full origin-left transform transition-transform duration-500 ${
                  index === currentLocation ? "scale-x-100" : "scale-x-0"
                }`}
                aria-hidden="true"
              />
            </span>
          ))}
        </div>

        {children}

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setCurrentLocation(index % locations.length);
              }}
              className={`w-12 h-0.5 transition-colors rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
