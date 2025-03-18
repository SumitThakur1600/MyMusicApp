"use client";

import React from "react";
import { BackgroundBeams } from "@/components/background-beams";

function MusicProduction() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36 relative">
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content Section */}
      <div className="w-full mx-auto p-6 relative z-10">
        <h1 className="md:text-6xl text-center font-sans font-bold mb-8 text-white text-4xl mt-3">
          The Art of Music Production
        </h1>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-neutral-300 text-xl text-center leading-relaxed mb-6">
            Music production is the process of transforming musical ideas into
            polished recordings. It involves composition, recording, sound
            design, mixing, and mastering. Whether you're producing beats,
            recording a band, or crafting cinematic scores, understanding
            production techniques will elevate the quality of your music.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Understanding the DAW:</strong> The Digital Audio
            Workstation (DAW) is the core tool of modern music production.
            Programs like Ableton Live, FL Studio, Logic Pro, and Pro Tools
            allow producers to record, edit, and arrange their music. Learning
            the workflow of your DAW is essential for efficient and creative
            production.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Sound Design and Synthesis:</strong> Creating unique sounds
            is a key aspect of modern production. Synthesizers, samplers, and
            effects processing help shape textures and sonic character.
            Understanding subtractive, additive, and FM synthesis allows
            producers to design custom sounds for their music.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Recording and Microphone Techniques:</strong> High-quality
            recordings begin with the right microphone placement and acoustics.
            Dynamic, condenser, and ribbon microphones each have their unique
            characteristics. Proper mic positioning ensures clean captures of
            vocals and instruments.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Arranging and Composition:</strong> A well-structured
            arrangement keeps a listener engaged. Understanding dynamics,
            build-ups, breakdowns, and layering enhances musical storytelling.
            Using automation and transitions helps maintain energy and movement
            throughout the track.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Mixing and EQ Balancing:</strong> Mixing brings all elements
            of a track together. Equalization (EQ) ensures clarity by separating
            instruments in the frequency spectrum. Compression and reverb add
            depth and cohesion to the final mix.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Mastering for Final Polish:</strong> Mastering ensures the
            final track is balanced, loud, and radio-ready. It involves
            limiting, stereo widening, and final EQ adjustments. Proper
            mastering ensures the song translates well across different playback
            systems.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>Creativity and Experimentation:</strong> Music production is
            an art that thrives on experimentation. Breaking traditional rules,
            using unconventional techniques, and layering unexpected sounds can
            lead to groundbreaking music.
          </p>

          <p className="text-neutral-300 text-lg text-center leading-relaxed mt-6">
            Music production is a journey of technical skill and artistic
            expression. Keep refining your craft, learning new techniques, and
            exploring your unique sound. Every track you produce is a step
            toward mastering the art of music creation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MusicProduction;
