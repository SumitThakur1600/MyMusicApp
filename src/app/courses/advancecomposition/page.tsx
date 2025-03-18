"use client";

import React from "react";
import { BackgroundBeams } from "@/components/background-beams";

function AdvancedComposition() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36 relative">
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content Section */}
      <div className="w-full mx-auto p-6 relative z-10">
        <h1 className="md:text-6xl text-center font-sans font-bold mb-8 text-white text-4xl mt-3">
          Master Advanced Composition
        </h1>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-neutral-300 text-xl text-center leading-relaxed mb-6">
            Advanced composition goes beyond basic music theory, incorporating complex harmonies, intricate rhythms, 
            and innovative structures. Whether you're composing for orchestras, producing electronic music, or writing progressive rock, 
            mastering these advanced techniques will elevate your creativity.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Modulation and Key Changes:</strong> A composition gains depth when it moves between keys. 
            Using pivot chords, chromatic modulations, or even abrupt parallel key shifts can create surprise and emotional tension in a piece.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Counterpoint and Polyphony:</strong> Layering independent melodies together is the essence of counterpoint. 
            Techniques like imitation, contrary motion, and fugues allow composers to craft intricate textures where multiple lines interact harmoniously.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Extended and Altered Harmonies:</strong> Moving beyond basic triads, advanced harmony involves seventh, ninth, and thirteenth chords, 
            borrowed chords, and quartal harmony. These elements add richness, color, and sophistication to progressions, widely used in jazz, film scoring, and progressive music.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Polyrhythms and Metric Modulation:</strong> Rhythmic complexity is crucial in advanced composition. 
            Techniques like three against four (hemiola), odd time signatures such as 5/8, 7/8, and 11/8, and tempo modulations can create an unpredictable and engaging rhythmic feel.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Orchestration and Texture:</strong> Effective orchestration is about more than just assigning instruments. 
            It involves balancing timbre, dynamics, and spatial depth. Whether arranging for strings, brass, or synth layers, understanding how instruments blend and contrast 
            is key to dynamic composition.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Atonality and Experimental Techniques:</strong> Breaking traditional rules opens new creative pathways. 
            Atonality, serialism, aleatoric music, and microtonality allow composers to craft unique, avant-garde works that challenge conventional listening.
          </p>

          <p className="text-neutral-300 text-lg text-center leading-relaxed mt-6">
            Whether you're pushing the boundaries of harmony, exploring advanced rhythmic structures, or orchestrating for a full ensemble, 
            composition is limitless. Continue refining your skills, experiment with new ideas, and let your music tell a story beyond the ordinary.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvancedComposition;
