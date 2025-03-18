"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/background-beams";

function BasicMusicTheory() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36 relative">
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content Section */}
      <div className="w-full mx-auto p-6 relative z-10">
        <h1 className="md:text-6xl text-center font-sans font-bold mb-8 text-white text-4xl mt-3">
          Master Music Theory
        </h1>
        <div className="max-3xl mx-auto px-6 text-balance">
          <p className="text-neutral-300 text-xl text-center leading-relaxed mb-6">
            <strong>Music theory</strong> is the foundation of all music—it
            helps us understand how melodies, harmonies, and rhythms come
            together. Whether you're composing, playing an instrument, or simply
            listening, understanding the basics of music theory enhances your
            experience.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>🎼 Scales & Keys:</strong> Every song is built on a scale.
            The <strong>major scale</strong> produces bright and happy tones,
            while the <strong>minor scale</strong> often carries emotional or
            moody characteristics. Learning different scales helps musicians
            create melodies and harmonies that fit together seamlessly.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>🎸 Chords & Progressions:</strong> Chords are groups of
            notes played together, forming harmony. Common progressions like{" "}
            <strong>I-IV-V-I (C-F-G-C)</strong> serve as the foundation of
            countless songs. Mastering chord relationships enables musicians to
            improvise, compose, and enhance musical expression.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>🥁 Rhythm & Time Signatures:</strong> Rhythm gives music its
            movement and flow. A <strong>4/4 time signature</strong> (common in
            pop and rock) provides a steady beat, while a{" "}
            <strong>3/4 waltz</strong> introduces a graceful, dance-like rhythm.
            Understanding rhythm helps musicians stay in sync and develop strong
            timing.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>🎶 Melody & Harmony:</strong> Melody is the{" "}
            <strong>soul of a song</strong>, the part you hum or sing. Harmony
            adds richness by combining multiple notes. A deep understanding of
            melody and harmony allows musicians to craft memorable compositions
            and intricate arrangements.
          </p>

          <p className="text-neutral-400 text-lg text-center leading-relaxed mb-4">
            <strong>👂 Ear Training & Notation:</strong> Great musicians can{" "}
            <strong>hear a note and recognize it instantly</strong>. Ear
            training and musical notation literacy empower artists to play by
            ear, transcribe melodies, and communicate music effectively.
          </p>

          <p className="text-neutral-300 text-lg text-center leading-relaxed mt-6">
            Whether you're just starting or diving into advanced techniques,
            music theory is a <strong>powerful tool</strong> that unlocks
            endless creative possibilities. Keep learning, experimenting, and
            most importantly—keep making music! 🎵
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicMusicTheory;
